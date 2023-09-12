const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.post("/upload_img", function (req, res) {
  res.send("my server");
});

app.listen(5000);
