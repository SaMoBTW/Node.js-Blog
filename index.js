import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello from nodemon</h1>");
});

app.listen(port, () => console.log("listeing on port " + port));
