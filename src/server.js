const http = require("http");
const url = require("url");
const { User1, User2, User3 } = require("./dataUser");
const { response1, response2 } = require("./response");

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;

    if (pathname === "/") {
      try {
        res.setHeader("Content-Type", "html");
        res.writeHead(200);
        res.end("<h1>Hallo!</h1>\n");
      } catch (error) {
        res.end(error.message);
      }
    } else if (pathname === "/user") {
      try {
        res.setHeader("Content-Type", "application/json");
        res.writeHead(200);
        res.end(JSON.stringify({ User1, User2, User3 }));
      } catch (error) {
        res.end(error.message);
      }
    } else {
      try {
        res.setHeader("Content-Type", "application/json");
        res.writeHead(404);
        res.end(JSON.stringify(response1));
      } catch (error) {
        res.end(error.message);
      }
    }
  } else {
    try {
      res.setHeader("Content-Type", "application/json");
      res.writeHead(404);
      res.end(JSON.stringify(response2));
    } catch (error) {
      res.end(error.message);
    }
  }
});

server.listen(3000, () => {
  console.log(`Server berjalan di port 3000`);
});
