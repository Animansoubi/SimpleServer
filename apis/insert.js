/**
 * Created by anahid on 7/29/17.
 */
var response = require("../common/const");

var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost/SimpleServer');

function provide(router) {
    router.post('/insert/:model', function (req, res) {
        try {
            db.collection(req.params.model).insert(req.body, function (err) {
                if (err) {
                    console.log(err);
                    res.send(response.DB_ERROR);
                } else {
                    var object_id = req.body._id;
                    var returnResponse = response;

                }
            });
        } catch (e) {
            console.log(response.GENERAL_ERROR);
        }

    });
}
exports.provide = provide;
