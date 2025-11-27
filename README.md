
---

##  `README.md`
## node js
<img width="791" height="597" alt="Screenshot 2025-11-27 120141" src="https://github.com/user-attachments/assets/022cf8c5-8dac-42cd-8cc4-b3526f89cd50" />


## bun js
<img width="760" height="589" alt="Screenshot 2025-11-27 120112" src="https://github.com/user-attachments/assets/ed9295b9-6d35-4fd2-abd2-a0743aaf2229" />



````markdown
# Bun vs Node.js HTTP Benchmark

This project compares the raw HTTP performance of **Bun** and **Node.js** using the `autocannon` benchmarking tool.

The benchmark sends **100,000 HTTP requests** with **125 concurrent connections** to simple HTTP servers implemented in Bun and Node, and reports metrics like **Requests/sec**, **Latency**, and **Throughput**.

---

## 1. Project Structure

```text
bun-node-benchmark/
├── bun-server/
│   └── index.js          # Bun HTTP server (port 3001)
├── node-server/
│   └── index.js          # Node HTTP server (port 3000)
├── bench-bun.js          # Benchmark Bun server
├── bench-node.js         # Benchmark Node server
├── package.json          # npm dependencies (autocannon)
└── package-lock.json
````

---

## 2. Requirements

* Node.js (v18+ recommended)
* Bun runtime
* npm (to install `autocannon`)

Install dependencies:

```bash
npm install
```

`autocannon` is declared in `package.json` as a dependency.

---

## 3. HTTP Servers

## 4. Benchmark Scripts


## 5. How to Run

### 5.1 Start Node.js server

```bash
node node-server/index.js
```

### 5.2 Start Bun server

```bash
bun run bun-server/index.js
```

> Note: You can run them in two different terminals.

---

## 6. Run the Benchmarks

### 6.1 Benchmark Node.js

```bash
node bench-node.js
```

### 6.2 Benchmark Bun

```bash
node bench-bun.js    # using Node to run autocannon against Bun
```

---

## 7. Example Output (Sample)

Node.js:

* Requests/sec: ~12,500
* Avg Latency: ~9 ms

Bun:

* Requests/sec: ~20,000
* Avg Latency: ~5 ms

(Exact numbers will depend on your hardware and system load.)

---

## 8. Notes

* Both servers return a very simple `"Hello ..."` text response to keep the focus on raw HTTP performance.
* Logging and heavy computation are avoided to minimize noise in measurements.
* You can change the `connections` and `amount` in the benchmark scripts to simulate different loads.

---

## 9. Future Improvements

* Add multiple endpoints and routes.
* Test JSON serialization and parsing.
* Record CPU and memory usage with OS tools.
* Run multiple rounds and compute an average for better stability.

````

---

## 3️⃣ Architecture Diagram (ASCII)

```text
                   ┌──────────────────────────────┐
                   │         CLIENT TOOL          │
                   │        (autocannon)          │
                   └──────────────┬───────────────┘
                                  │
                    HTTP Requests │ 100k, 125 conns
                                  ▼
          ┌───────────────────────────────────────────────┐
          │               LOCAL MACHINE                   │
          │                                               │
          │   ┌─────────────────────┐    ┌─────────────┐ │
          │   │  Node.js HTTP App   │    │ Bun HTTP App│ │
          │   │  node-server/index  │    │ bun-server  │ │
          │   │  Port: 3000         │    │ Port: 3001  │ │
          │   └─────────┬───────────┘    └─────┬───────┘ │
          │             │                      │         │
          │    Node Benchmark          Bun Benchmark     │
          │    bench-node.js           bench-bun.js      │
          │    (autocannon)            (autocannon)      │
          └───────────────────────────────────────────────┘
````




