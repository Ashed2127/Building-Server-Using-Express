const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.end("<h1>server recieved</h1>");
});
app.listen(5000, (err) => {
  console.log("server is listening on port 5000");
});
