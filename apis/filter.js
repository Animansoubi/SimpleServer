/**
 * Created by anahid on 7/30/17.
 */
var response = require("../common/const");

var response = require("../common/const");
var fs = require('fs');
var url = require('url');
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost/SimpleServer');

var client = null;
var body = null;
var collectionName = null;

function provide(router) {
    try {
        router.get('/filter/:collectionName/:name/:value', mainHandler);
    } catch (e) {
        console.log(e);
    }
}

function mainHandler(req, res) {
    client = res;
    var query = {};
    query[req.params.name] = req.params.value;
    db.collection(req.params.collectionName).find(query, getFilterdDoc);
}

function getFilterdDoc(err, doc) {
    if (err) {
        console.log(err);
    } else {
        for (var index in doc) {
            console.log(doc[index]);
            if (typeof doc[index].file !== "undefined") {
                var url = "http://localhost:3001/images/" + doc[index]._id;
                doc[index].file = url;
                console.log(doc[index].file);
            }
        }
        client.send({code: 0, result: doc});
    }
}

exports.provide = provide;