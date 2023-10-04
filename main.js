const express = require("express");
const fs = require("fs");
const ejs = require('ejs');
const path = require('path');
const port = 3000;

const app = express();

let totalViews = 0;

if (fs.existsSync("views.txt")) {
  totalViews = parseInt(fs.readFileSync("views.txt", "utf8"));
}

app.get("/", (req, res) => {
  totalViews++;

  let html = fs.readFileSync(__dirname + "/index.html", "utf8");
  html = ejs.render(html, {views: totalViews});

  res.send(html);
});

app.use(express.static(path.join(__dirname)));

app.listen(port, () => {
  console.log(`Personal website being hosted at: http://localhost:${port}`);
});
