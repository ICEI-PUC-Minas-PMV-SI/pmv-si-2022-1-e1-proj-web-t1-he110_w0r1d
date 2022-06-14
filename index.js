const express = require("express");
const path = require("path");

const app = express();
app.use(express.static("./src"));

const port = process.env.PORT || 8080;

// sendFile will go here
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "src/homepage.html"));
});

app.listen(port);
console.log("Server started at http://localhost:" + port);
