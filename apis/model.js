/**
 * Created by anahid on 7/30/17.
 */
var response = require("../common/const");

var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost/SimpleServer');

function provide(router) {
    router.post("/model", function (req, res) {
        try {

            db.model.insert(req.body, function (err) {
                if (err) {
                    console.log(err);
                    res.send(response.DB_ERROR);
                } else {
                    res.send(response.SUCCESS);
                }
            });
        } catch (e) {
            console.log(response.GENERAL_ERROR);
        }
    });
}

exports.provide = provide;

