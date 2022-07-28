const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;

const { v4: uuidv4 } = require("uuid");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let data = [];

app.get("/user", (req, res) => {
  res.send(data);
});

app.post("/user", (req, res) => {
  let uniqueId = uuidv4();
  data.push({ id: uniqueId, name: req.body.name });
  res.send(data);
});

app.put("/user/:id", (req, res) => {
  for (let index = 0; index < data.length; ++index)
    if (data[index]["id"] === req.params.id) {
      data[index]["name"] = req.body.name;
      res.send(data);
    }
  res.status(500).send("");
});

//app.get("/data/games", (req, res) => {
//res.send(games);
//if (games = pending) {
//res.send = req.pending
//}
//});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
