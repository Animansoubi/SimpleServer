/**
 *  Created by anahid on 8/4/17.
 */
var response = require("../common/const");

var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost/SimpleServer');

var client = null;
var body = null;
var collectionName = null;

function provide(router) {
    router.post("/model", function (req, res) {
        client = res;
        body = req.body;
        collectionName = req.body.name;
        db.model.find({}, collectionNamesCallBack)
    })
}

function collectionNamesCallBack(err, docs) {
    var sent = false;
    if (err) {
        client.send(response.DB_ERROR);
    } else {
        console.log(docs);
        for (var item in docs) {
            console.log(docs[item]);
            console.log(collectionName);
            if (docs[item].name == collectionName) {
                client.send(response.MODEL_ALREADY_EXIST);
                sent = true;
                break;
            }
        }
        if (!sent) {
            db.model.insert(body);
            client.send(response.SUCCESS)
        }
    }
}

exports.provide = provide;