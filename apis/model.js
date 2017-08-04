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
    router.post("/model", function (req, res) {
        client = res;
        body = req.body;
        collectionName = req.body.name;
        db.getCollectionNames(collectionNamesCallBack)
    })
}

function collectionNamesCallBack(err, listOfCollections) {
    if (err) {
        client.send(response.DB_ERROR);
    } else {
        if (listOfCollections.indexOf(collectionName) > -1) {
            // Model already exist
            client.send(response.MODEL_ALREADY_EXIST);
        } else {
            // Model is new
            var variable = "{";
            for (var i = 0;i < body.fields.length; i++) {
                if (body.fields[i].required) {
                    variable += '"' + body.fields[i].name + '" : "required" ,';
                } else {
                    variable += '"' + body.fields[i].name + '" : "not_required" ,';
                }
            }
            variable += ' "main_record" : true}';
            console.log(variable);
            var doc = JSON.parse(variable);
            db.collection(collectionName).insert(doc, function (err) {
                if (err) {
                    client.send(response.DB_ERROR);
                } else {
                    client.send(response.SUCCESS);
                }
            })
        }
    }
}

exports.provide = provide;