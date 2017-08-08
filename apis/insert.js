/**
 * Created by anahid on 8/7/17.
 */

var response = require("../common/const");
var fs = require('fs');
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost/SimpleServer');

var client = null;
var body = null;
var collectionName = null;
var isBodyError = null;
var object_id = null;

function provide(router) {
    try {
        router.post('/insert/:collectionName', mainHandler);
    } catch (e) {
        console.log(e);
    }
}

function mainHandler(req, res) {
    client = res;
    body = req.body;
    collectionName = req.params.collectionName;
    isBodyError = false;
    db.model.findOne({name: collectionName}, findCollectionNameCallBack);
}

function findCollectionNameCallBack(err, doc) {
    try {
        if (err) {
            client.send(response.DB_ERROR, "document not find");
        } else {
            for (var index in doc.fields) {
                if (doc.fields[index].required) {
                    if (body[doc.fields[index].name] == null || !validateTypeFormat(doc.fields[index].type, body[doc.fields[index].name])) {
                        {
                            isBodyError = true;
                            break;
                        }
                    }
                }
            }
            if (!isBodyError) {
                // Insert to collection with name of collectionName
                db.collection(collectionName).insert(body, function (err) {
                    if (err) {
                        client.send(response.USER_ALREADY_EXIST);
                    }
                    else {
                        object_id = body._id;
                        var returnResponse = response.SUCCESS_INSERT;
                        returnResponse.objectId = object_id;
                        if (body.file != null)
                            base64_decode(body.file, "public/images/" + object_id);
                        client.send(returnResponse);
                    }
                })
            } else {
                client.send(response.BAD_BODY_ERROR);
            }
        }
    } catch (e) {
        console.log(e);
    }
}

function validateTypeFormat(item, value) {
    var itemType = typeof item;
    //console.log(itemType);
    var valueType = typeof value;
    //console.log(valueType);
    return itemType == valueType;
}

function base64_decode(base64str, file) {
    var bitmap = new Buffer(base64str, 'base64');
    fs.writeFileSync(file, bitmap);
    console.log('**** File created from base64 encoded string ****');
}

exports.provide = provide;