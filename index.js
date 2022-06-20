const { notDeepEqual } = require("assert");
const express = require("express");
const path = require("path");
const { receiveMessageOnPort } = require("worker_threads");

const app = express();
const db = require("./src/json/db-eventos.json");
app.use(express.static("./src"));

const port = process.env.PORT || 8080;

app.get("/api/eventos/:id", function (req, res) {
  const id = parseInt(req.params.id);

  const evento = db.eventos.find((evento) => evento.id === id);
  if (!evento) {
    res.status(404).send();
    return;
  }
  res.json(evento);
});

app.get("/api/eventos", function (req, res) {
  res.json(db.eventos);
});

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "src/homepage.html"));
});

app.listen(port);
console.log("Server started at http://localhost:" + port);
