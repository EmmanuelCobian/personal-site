const express = require("express");
const fs = require("fs");
const path = require('path');
const port = 3000;

const app = express();

let totalViews = 0;

if (fs.existsSync("views.txt")) {
  totalViews = parseInt(fs.readFileSync("views.txt", "utf8"));
}
app.get("/", (req, res) => {
  totalViews++;

  fs.writeFileSync("views.txt", "" + totalViews);

  let html = fs.readFileSync(__dirname + "/index.html", "utf8");
  html = html.replace("{{views}}", totalViews);

  res.send(html);
});

app.use(express.static(path.join(__dirname)));


app.listen(port, () => {
  console.log(`Personal website being hosted at: http://localhost:${port}`);
});
