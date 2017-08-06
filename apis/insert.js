/**
 *  Created by anahid on 8/4/17.
 */
var response = require("../common/const");

var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost/SimpleServer');
var model = require("../apis/model");

var client = null;
var body = null;
var collectionName = null;

function provide(router) {
    router.post('/insert/:collectionName', function (req, res) {
        client = res;
        body = req.body;
        collectionName = req.params.collectionName;
        var isBodyError = false;
        db.model.findOne({name: collectionName}, function (err, doc) {
            if (err) {
                client.send(response.DB_ERROR);
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
                            console.log("2");
                            client.send(response.USER_ALREADY_EXIST);
                        }
                        else {
                            var object_id = req.body._id;
                            var returnResponse = response.SUCCESS_INSERT;
                            returnResponse.objectId = object_id;
                            client.send(returnResponse);
                        }
                    })
                } else {
                    client.send(response.BAD_BODY_ERROR);
                }
            }
        })

    });

    function validateTypeFormat(item, value) {
        var itemType = typeof item;
        //console.log(itemType);
        var valueType = typeof value;
        //console.log(valueType);
        return itemType == valueType;
    }
}

exports.provide = provide;
