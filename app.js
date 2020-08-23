var express = require("express");
//var bodyParser = require('body-parser');
var cors = require("cors");

var app = express();

//app.use(bodyParser());
app.use(cors());

var path = __dirname + "/views";

var port = process.env.PORT || 8000;

app.use(express.static("public"));

app.set("view engine", "ejs");

app.use(express.json());

app.get("/", (req, res) => {
  res.render(path + "/index", {
    page_name: "index",
  });
});

app.get("/about", (req, res) => {
  res.render(path + "/about", {
    page_name: "about",
  });
});

app.get("/sermons", (req, res) => {
  res.render(path + "/sermons", {
    page_name: "sermons",
  });
});

app.get("/ministries", (req, res) => {
  res.render(path + "/ministries", {
    page_name: "ministries",
  });
});

app.get("/women-ministry", (req, res) => {
  res.render(path + "/women-ministry", {
    page_name: "women-ministry",
  });
});

app.get("/men-ministry", (req, res) => {
  res.render(path + "/men-ministry", {
    page_name: "men-ministry",
  });
});

app.get("/youth-ministry", (req, res) => {
  res.render(path + "/youth-ministry", {
    page_name: "youth-ministry",
  });
});

app.get("/children-ministry", (req, res) => {
  res.render(path + "/children-ministry", {
    page_name: "children-ministry",
  });
});

app.get("/contact", (req, res) => {
  res.render(path + "/contact", {
    page_name: "contact",
  });
});

app.get("/church-online", (req, res) => {
  res.render(path + "/church-online", {
    page_name: "church-online",
  });
});

app.get("/bbc-tv", (req, res) => {
  res.render(path + "/bbc-tv", {
    page_name: "bbc-tv",
  });
});

app.listen(port, function () {
  console.log("bbc listening at ", port);
});
