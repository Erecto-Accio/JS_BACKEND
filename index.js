const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello,World");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please Login</h1>");
});
app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${port}`);
});
