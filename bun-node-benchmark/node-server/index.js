// Simple Node.js HTTP server

const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello from Node.js!\n");
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Node server listening on http://localhost:${PORT}`);
});
