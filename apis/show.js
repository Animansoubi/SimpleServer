/**
 * Created by anahid on 8/6/17.
 */

var response = require("../common/const");
var url = require('url');
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost/SimpleServer');

var client = null;
var body = null;
var objectId = null;
var collectionName = null;

function provide(router) {
    router.get("/show/:collectionName", function (req, res) {
        client = res;
        collectionName = req.params.collectionName;
        var objectId = req.query.id;
        db.collection(collectionName).find({}, function (err, docs) {
            if (err) {
                client.send(response.DB_ERROR);
            } else {
                for (var item in docs) {
                    console.log(docs[item]);
                    if (docs[item]._id == objectId) {
                        console.log(docs[item]);
                        client.send(docs[item]);
                    }
                }

            }
        })
    })

}
exports.provide = provide;