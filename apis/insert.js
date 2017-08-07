/**
 * Created by anahid on 8/7/17.
 */

var response = require("../common/const");
var encrytDecrypt = require("../common/encryption");
var fs = require('fs');
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost/SimpleServer');
var model = require("../apis/model");

var client = null;
var body = null;
var collectionName = null;
var isBodyError = null;

function provide(router) {
    try {
        router.post('/insert/:collectionName', mainHandler);
    } catch (e) {
        console.log(e);
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
                    if (doc.fields[index].type == file) {
                        // convert image to base64 encoded string
                        var base64str = base64_encode(file);
                        console.log(base64str);
                    }
                }
                if (!isBodyError) {
                    // Insert to collection with name of collectionName
                    db.collection(collectionName).insert(body, function (err) {
                        if (err) {
                            console.log("2");
                            client.send(response.USER_ALREADY_EXIST);
                        }
                        else {
                            var object_id = body._id;
                            var returnResponse = response.SUCCESS_INSERT;
                            returnResponse.objectId = object_id;
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
}
exports.provide = provide;