/**
 * Created by anahid on 7/30/17.
 */
var response = require("../common/const");

var fs = require('fs');
var url = require('url');
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost/SimpleServer');

var client = null;
var body = null;
var collectionName = null;
var isBodyError = null;
var object_id = null;

function provide(router) {
    try {
        router.get('/list/:collectionName', mainHandler);
    } catch (e) {
        console.log(e);
    }
}

function mainHandler(req, res) {
    client = res;
    body = req;
    collectionName = body.params.collectionName;
    db.collection(collectionName).find({}, getDocsCallBack);
}

function getDocsCallBack(err, docs) {
    if (err) {
        console.log(err);
        client.send(response.DB_ERROR);
    } else {
        for (var index in docs) {
            if (docs[index].file !== null) {
                object_id = docs[index]._id;
                var url = "http://localhost:3001/images/" + object_id;
                docs[index].file = url;
            }
        }
        client.send({code: 0, result: docs});
    }
}
exports.provide = provide;
