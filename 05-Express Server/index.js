const express = require("express");
const app = express();
const port = 3000;

app.get("/", (request, response) => {
  response.send("Hello World");
});
app.get("/about", (request, response) => {
  response.send("Hello World from ABOUT PAGE");
});
app.get("/hobbies", (request, response) => {
  response.send("<h1>Hello World from hobbies PAGE</h1>");
});

app.get("/friends", (req, res) => {
  res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
