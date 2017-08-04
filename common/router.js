/**
 * Created by anahid on 7/30/17.
 */

var express = require("express");
var router = express.Router();

var clientModel = require("../apis/model");
clientModel.provide(router);

var personInsert = require("../apis/insert");
personInsert.provide(router);

var personList = require("../apis/list");
personList.provide(router);

var personFilter = require("../apis/filter");
personFilter.provide(router);

module.exports = router;
