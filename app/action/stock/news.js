/*!
 * Created by j on 18/9/20.
 */

const fs = require('fs');
const path = require('path');

const dob = require('../../libs/dob.js')('news');

module.exports = {

    get: function (req, res) {
        res.json(dob.get());
    },

    post: function (req, res) {
        var data = req.body;
        dob.set(data);
        res.json(dob.get());
    },

    del: function (req, res) {
        var id = req.params.id;
        var result = dob.remove(id);
        res.json(dob.get());
    }
};