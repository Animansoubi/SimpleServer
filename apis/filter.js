/**
 * Created by anahid on 7/30/17.
 */
var response = require("../common/const");

var response = require("../common/const");
var fs = require('fs');
var path = require('path');
var url = require('url');
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost/SimpleServer');

var client = null;
var body = null;
var objectId = null;
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
        console.log(doc);
        for (var index in doc) {
            var objectId = body.query.id;
            if (docs[index]._id == objectId) {
                console.log(docs[index]);
                if (docs[index].file !== null) {
                    var url = "http://localhost:3001/images/" + objectId;
                    docs[index].file = url;
                    console.log(docs[index].file);
                    client.send({code: 0, result: docs[index]});
                }
            }
        }
    }
}

exports.provide = provide;