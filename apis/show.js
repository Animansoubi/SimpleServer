/**
 * Created by anahid on 8/6/17.
 */

var response = require("../common/const");
var fs = require('fs');
var mongojs = require('mongojs');
var mongo = require('mongodb');
var db = mongojs('mongodb://localhost/SimpleServer');

var client = null;
var body = null;
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
    var o_id = new mongo.ObjectID(req.query.id);
    console.log(o_id);
    db.collection(collectionName).findOne({"_id": o_id}, getDocsCallBack);
}

function getDocsCallBack(err, doc) {
    if (err) {
        console.log(err);
    } else {
        if (doc != null) {
            console.log(doc);
            if (typeof doc.file !== "undefined") {
                var url = "http://localhost:3001/images/" + doc._id;
                doc.file = url;
                console.log(doc.file);
            }
            client.send({code: 0, result: doc});
        } else {
            client.send("Invalid id")
        }

    }
}

exports.provide = provide;