var express = require("express");
var app = express();
app.get("/", (req, res) => res.send("Привіт, мій друже!"));
app.listen(3000, () => console.log("Сервер працює на порту 3000!"));
