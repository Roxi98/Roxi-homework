const express = require("express");
const app = express();

app.set("port", process.env.PORT || 3001);

app.get("/", (req, res, next) => {
  res.send("<h1>Szia Timi<h1>");
});

app.listen(app.get("port"), () => {
  console.info(`Server listen on port ${app.get("port")}`);
});
