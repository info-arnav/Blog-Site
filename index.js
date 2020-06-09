const express = require("express");
////const mongoose = require("mongoose");
const cors = require("cors");
////const bodyParser = require("body-parser");
const app = express();
////app.use(bodyParser.json);
////app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.listen(9000, (req, res) => {
  console.log("server started on port 9000");
});
////mongoose.connect("mongodb://localhost/my_database");
app.get("/", (req, res) =>
  res.json({ apir: "this is the api response from sever 9000" })
);
/*
app.post("/posts/store", (req, res) => {
  console.log(req.body);
  res.redirect("http://localhost:1234/");
});
*/
