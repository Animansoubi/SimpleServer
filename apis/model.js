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
        collectionName = body.name;
        db.model.find({}, collectionNamesCallBack)
    })
}

function collectionNamesCallBack(err, docs) {
    var sent = false
    if (err) {
        client.send(response.DB_ERROR);
    } else {
        for (var item in docs) {
            // console.log(docs[item]);
            // console.log(collectionName);
            if (docs[item].name == collectionName) {
                client.send(response.MODEL_ALREADY_EXIST);
                sent = true;
                break;
            }
        }
        if (!sent) {
            db.model.insert(body);
            db.createCollection(body.name, function (e1) {
                if (e1) {
                    console.log("Error Creating Index", e1)
                } else {
                    for (item in body.fields) {
                        if (body.fields[item].unique) {
                            var index = {}
                            index[body.fields[item].name] = 1;
                            db.collection(body.name).ensureIndex(index, {unique: true}, function (e2) {
                                if (e2) {
                                    console.log("Errot Ensuring Index", e2)
                                }
                            })
                        }
                    }
                }

            });

            client.send(response.SUCCESS)
        }
    }
}

exports.provide = provide;