const http = require("node:http");

const server = http.createServer((req, res) => {
  console.log("hello");
  res.end();
});

server.on("clientError", (err, socket) => {
  socket.end("HTTP/1.1 400 BAD Request\r\n\r\n");
});

server.listen(8000);
