/**
 * Created by mohammadmoradyar on 8/4/17.
 */
var response = require("../common/const");

var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost/SimpleServer');

var client = null;
var body = null;
var collectionName = null;

function provide(router) {
    router.post('/insert/:collectionName', function (req, res) {
        try {
            client = res;
            body = req.body;
            collectionName = req.params.collectionName;
            var query = {main_record: true};
            db.collection(collectionName).findOne(query, function (err, item) {
                if (err) {
                    client.send(response.DB_ERROR);
                } else {
                    if (!validateRequiredFields(item.username, body.username)) {
                        res.send(response.BAD_BODY_ERROR);
                    } else if (!validateRequiredFields(item.firstname, body.firstname)) {
                        res.send(response.BAD_BODY_ERROR);
                    } else if (!validateRequiredFields(item.lastname, body.lastname)) {
                        res.send(response.BAD_BODY_ERROR);
                    } else if (!validateRequiredFields(item.phone, body.phone)) {
                        res.send(response.BAD_BODY_ERROR);
                    } else {
                        if (!validateTypeFormat(item.username, body.username)) {
                            res.send(response.BAD_BODY_ERROR);
                        } else if (!validateTypeFormat(item.firstname, body.firstname)) {
                            res.send(response.BAD_BODY_ERROR);
                        } else if (!validateTypeFormat(item.lastname, body.lastname)) {
                            res.send(response.BAD_BODY_ERROR);
                        } else if (!validateTypeFormat(item.phone, body.phone)) {
                            res.send(response.BAD_BODY_ERROR);
                        } else {
                            db.collection(collectionName).insert(body, function (err) {
                                if (err) {
                                    console.log(err);
                                    res.send(response.DB_ERROR);
                                } else {
                                    var object_id = req.body._id;
                                    var returnResponse = response.SUCCESS_INSERT;
                                    returnResponse.objectId = object_id;
                                    res.send(returnResponse);
                                }
                            });
                        }
                    }
                }
            });
        } catch (e) {
            console.log(response.GENERAL_ERROR);
        }
    });
}
function validateRequiredFields(item, value) {
    if (item == "required") {
        if (value == null) {
            return false;
        } else {
            return true;
        }
    } else {
        return true;
    }
}

function validateTypeFormat(item, value) {
    var itemType = typeof item;
    var valueType = typeof value;
    if (valueType === 'undefined')
        return true;
    return itemType == valueType;
}

exports.provide = provide;