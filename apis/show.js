/**
 * Created by anahid on 8/6/17.
 */

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
        router.get("/show/:collectionName", mainHandler);
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
    } else {
        for (var index in docs) {
            var objectId = body.query.id;
            if (docs[index]._id == objectId) {
               // console.log(docs[index]);
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