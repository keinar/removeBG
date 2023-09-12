const express = require("express");
const app = express();
const cors = require("cors");
const uploadfile = require("express-fileupload");
app.use(uploadfile());
app.use(express.static("upload_image"));
app.use(express.static("img_no_bg"));
app.use(cors());

app.post("/upload_img", function (req, res) {
  let time = new Date().getTime();
  let filename = time + "_" + req.files.UploadedFile.name;
  req.files.UploadedFile.mv(`${__dirname}/upload_image/${filename}`, (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      // Requires "axios" and "form-data" to be installed (see https://www.npmjs.com/package/axios and https://www.npmjs.com/package/form-data)
      const axios = require("axios");
      const FormData = require("form-data");
      const fs = require("fs");
      const path = require("path");

      const inputPath = `${__dirname}/upload_image/${filename}`;
      const formData = new FormData();
      formData.append("size", "auto");
      formData.append(
        "image_file",
        fs.createReadStream(inputPath),
        path.basename(inputPath)
      );

      axios({
        method: "post",
        url: "https://api.remove.bg/v1.0/removebg",
        data: formData,
        responseType: "arraybuffer",
        headers: {
          ...formData.getHeaders(),
          "X-Api-Key": "oexymWGEmMSMxjnvQj1Ne1Ca",
        },
        encoding: null,
      })
        .then((response) => {
          if (response.status != 200)
            return console.error(
              "Error:",
              response.status,
              response.statusText
            );
          (async () => {
            fs.writeFileSync(
              `${__dirname}/img_no_bg/no_bg_${filename}`,
              response.data
            );
          })();
          res.send(fileName);
        })
        .catch((error) => {
          return console.error("Request failed:", error);
        });
    }
  });
});

app.listen(5000);
