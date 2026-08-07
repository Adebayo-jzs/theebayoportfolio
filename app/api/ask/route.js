/**
 * Proxy route to forward chat queries to the external LLM backend.
 * Frontend calls /api/ask → this route forwards to localhost:5000/api/ask
 */
export async function POST(request) {
  try {
    const body = await request.json();

    const backendResponse = await fetch("http://localhost:5000/api/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question: body.question }),
    });

    if (!backendResponse.ok) {
      const errorText = await backendResponse.text();
      return Response.json(
        { error: "Backend returned an error", details: errorText },
        { status: backendResponse.status }
      );
    }

    const data = await backendResponse.json();
    return Response.json(data);
  } catch (error) {
    console.error("Error proxying to LLM backend:", error);
    return Response.json(
      { error: "Failed to connect to the AI backend. Make sure it's running on port 5000." },
      { status: 502 }
    );
  }
}
