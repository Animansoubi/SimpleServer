var server_version = '0.0.1';

var router = require("./common/router");
var config = require("./common/const");
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost/SimpleServer', []);
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: true }));

var port = process.env.PORT || 3001;

app.use(config.MAIN_API_URL, router);
app.use(express.static('public'));

var server = app.listen(3001, function () {
    console.log("Server is up and running")
});
