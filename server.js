// dependencies
// ===============================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


// starts express
// ======================================
var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.static("public"));


// sets up body-parser for form input
// ====================================
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json());

