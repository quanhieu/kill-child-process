const http = require("http");

const server = http.createServer(function (req, res) {
  const url = req.url;

  if (url === "/") {
    // do a 200 response
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Hello World!<h1>");
    res.end();
  }
  if (url === "/close") {
    process.send("STOP");
  }
});

server.listen(1234, function () {
  console.log("server started at port 1234");
});

process.on("STOP", function(){
  console.log("Exiting NodeJS server");
  server.close();
})