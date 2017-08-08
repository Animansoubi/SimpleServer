/**
 * Created by anahid on 8/6/17.
 */

var response = require("../common/const");
var fs = require('fs');
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
                for (var index in docs) {
                    if (docs[index]._id == objectId) {
                        if (docs[index].file) {
                            console.log(docs[index].file)
                            var base64str = docs[index].file;
                            base64_decode(base64str, 'show.jpg');
                        }
                        client.send(docs[index]);
                    }
                }
            }
        })
    })
}

function base64_decode(base64str, file) {
    var bitmap = new Buffer(base64str, 'base64');
    fs.writeFileSync(file, bitmap);
    console.log('**** File created from base64 encoded string ****');
}
exports.provide = provide;