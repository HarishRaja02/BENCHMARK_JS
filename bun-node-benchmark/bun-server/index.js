// Simple Bun HTTP server

const server = Bun.serve({
  port: 3001,
  fetch(req) {
    return new Response("Hello from Bun!\n", {
      headers: { "Content-Type": "text/plain" },
    });
  },
});

console.log(`Bun server listening on http://localhost:${server.port}`);
