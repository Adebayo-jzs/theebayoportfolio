/**
 * Proxy route to forward chat queries to the external AskBayo RAG backend.
 * Frontend calls /api/ask → this route forwards to ${BACKEND_BASE_URL}/api/ask
 */
/**
 * Helper function to sanitize user input text:
 * 1. Strips null bytes, non-printable control characters, and zero-width spaces.
 * 2. Normalizes excessive whitespace and newlines.
 * 3. Trims leading and trailing whitespace.
 */
function sanitizeInput(text) {
  if (typeof text !== "string") return "";

  return text
    // Strip null bytes and non-printable control characters (except \t and \n)
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "")
    // Strip invisible zero-width characters
    .replace(/[\u200B-\u200D\uFEFF]/g, "")
    // Collapse excessive consecutive newlines (max 2)
    .replace(/\n{3,}/g, "\n\n")
    // Collapse excessive consecutive spaces
    .replace(/[ \t]{4,}/g, "   ")
    .trim();
}

export async function POST(request) {
  try {
    const body = await request.json().catch(() => null);

    if (!body || typeof body.question !== "string") {
      return Response.json(
        { error: "A valid 'question' string is required." },
        { status: 400 }
      );
    }

    const question = sanitizeInput(body.question);

    if (!question) {
      return Response.json(
        { error: "A non-empty 'question' is required." },
        { status: 400 }
      );
    }

    if (question.length > 500) {
      return Response.json(
        { error: "Question cannot exceed 500 characters." },
        { status: 400 }
      );
    }

    // Support multiple environment variable naming conventions with local fallback
    let rawBaseUrl = (
      process.env.BACKEND_BASE_URL ||
      process.env.BACKEND_URL ||
      process.env.NEXT_PUBLIC_BACKEND_URL ||
      "http://localhost:5000"
    ).trim();

    // Ensure protocol is present (e.g. if env variable was set as askaboutbayo.pxxl.click)
    if (!/^https?:\/\//i.test(rawBaseUrl)) {
      const isLocal =
        rawBaseUrl.startsWith("localhost") || rawBaseUrl.startsWith("127.0.0.1");
      rawBaseUrl = `${isLocal ? "http" : "https"}://${rawBaseUrl}`;
    }

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
      body: JSON.stringify({ question }),
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
          "Something went wrong. Please try again later.",
      },
      { status: 502 }
    );
  }
}

