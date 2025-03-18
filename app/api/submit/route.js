export async function POST(req) {
  try {
    const body = await req.json();
    console.log("Received Data:", body);

    const response = await fetch("https://script.google.com/macros/s/AKfycbz3kNnVy76ZPcp43pDnz2PxjPhXlo0k5urb8AoDl2iAvkpRSZUtcDSqxY4M97f3qx5_xg/exec", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const textResponse = await response.text(); // Read as text to check if it's HTML
    console.log("Raw Response from Apps Script:", textResponse);

    try {
      const result = JSON.parse(textResponse);
      return new Response(JSON.stringify(result), { 
        status: response.ok ? 200 : 500,
        headers: { "Content-Type": "application/json" }
      });
    } catch (jsonError) {
      return new Response(JSON.stringify({ success: false, message: "Invalid JSON response from server", raw: textResponse }), { 
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }

  } catch (error) {
    return new Response(JSON.stringify({ success: false, message: error.message }), { 
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
