var server_version = '0.0.1';

var router = require("./common/router");
var config = require("./common/const");
var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost/SimpleServer', []);
app.use(bodyParser.json());


var port = process.env.PORT || 3001;

app.use(config.MAIN_API_URL, router);

var server = app.listen(3001, function () {
    console.log("Server is up and running")
});
