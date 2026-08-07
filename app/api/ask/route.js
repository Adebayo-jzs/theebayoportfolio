/**
 * Proxy route to forward chat queries to the external AskBayo RAG backend.
 * Frontend calls /api/ask → this route forwards to ${BACKEND_BASE_URL}/api/ask
 */
export async function POST(request) {
  try {
    const body = await request.json();

    if (!body?.question?.trim()) {
      return Response.json(
        { error: "A non-empty 'question' is required." },
        { status: 400 }
      );
    }

    // Support multiple environment variable naming conventions with local fallback
    const rawBaseUrl =
      process.env.BACKEND_BASE_URL ||
      process.env.BACKEND_URL ||
      process.env.NEXT_PUBLIC_BACKEND_URL ||
      "http://localhost:5000";

    // Clean base URL (strip trailing slashes)
    const baseUrl = rawBaseUrl.replace(/\/+$/, "");

    // Ensure endpoint targets /api/ask
    const targetUrl = baseUrl.endsWith("/api/ask")
      ? baseUrl
      : baseUrl.endsWith("/api")
      ? `${baseUrl}/ask`
      : `${baseUrl}/api/ask`;

    // Forward real client IP for rate-limiting
    const clientIp =
      request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
      "";

    const headers = {
      "Content-Type": "application/json",
    };
    if (clientIp) {
      headers["x-forwarded-for"] = clientIp;
    }

    const backendResponse = await fetch(targetUrl, {
      method: "POST",
      headers,
      body: JSON.stringify({ question: body.question.trim() }),
      cache: "no-store",
    });

    const data = await backendResponse.json().catch(() => null);

    if (!backendResponse.ok) {
      const errorMessage =
        data?.message ||
        data?.error ||
        `Backend returned an error (${backendResponse.status})`;

      return Response.json(
        { error: errorMessage, details: data },
        { status: backendResponse.status }
      );
    }

    return Response.json(data);
  } catch (error) {
    console.error("Error proxying to AskBayo backend:", error);
    return Response.json(
      {
        error:
          "Something went wrong. TRy agin later.",
      },
      { status: 502 }
    );
  }
}

