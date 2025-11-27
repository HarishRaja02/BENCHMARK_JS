const autocannon = require("autocannon");

function run(url) {
  const instance = autocannon({
    url,
    connections: 125,   // concurrent users
    amount: 100000      // total requests
  });

  autocannon.track(instance);

  instance.on("done", (result) => {
    console.log("\n=== Node.js Benchmark Result ===");
    console.log("Requests/sec:", result.requests.average);
    console.log("Latency (avg ms):", result.latency.average);
    console.log("Throughput (bytes/sec):", result.throughput.average);
  });
}

run("http://localhost:3001");
