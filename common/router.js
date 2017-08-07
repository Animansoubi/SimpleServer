/**
 * Created by anahid on 7/30/17.
 */

var express = require("express");
var router = express.Router();

var model = require("../apis/model");
model.provide(router);

var insert = require("../apis/insert");
insert.provide(router);

var list = require("../apis/list");
list.provide(router);

var filter = require("../apis/filter");
filter.provide(router);

var show = require("../apis/show");
show.provide(router);

module.exports = router;
