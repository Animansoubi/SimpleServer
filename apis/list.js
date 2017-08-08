/**
 * Created by anahid on 7/30/17.
 */
var response = require("../common/const");

var fs = require('fs');
var url = require('url');
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost/SimpleServer');

function provide(router) {
    router.get('/list/:model', function (req, res) {
        try {
            db.collection(req.params.model).find({}, function (err, docs) {
                if (err) {
                    console.log(err);
                    res.send(response.DB_ERROR);
                } else {
                    res.send({code: 0, result: docs});
                }
            });
        } catch (e) {
            console.log(response.GENERAL_ERROR);
        }
    });
}
exports.provide = provide;