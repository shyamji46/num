export default {
  async fetch(request) {
    const url = new URL(request.url);
    const number = url.searchParams.get("number");

    if (!number) {
      return new Response(JSON.stringify({ status: "error", message: "Number required" }), {
        headers: { "Content-Type": "application/json" },
      });
    }

    const target = `https://private-osint.drsudo.workers.dev/?key=luffy&number=${number}`;

    try {
      const response = await fetch(target, {
        headers: { "User-Agent": "Mozilla/5.0" }
      });

      const data = await response.text();

      return new Response(data, {
        headers: { "Content-Type": "application/json" },
      });
    } catch (err) {
      return new Response(JSON.stringify({ status: "error", message: err.toString() }), {
        headers: { "Content-Type": "application/json" },
      });
    }
  }
}
  
