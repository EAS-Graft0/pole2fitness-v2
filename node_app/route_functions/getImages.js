var dbHelper = require('../utils/databaseHelper.js')
var Promise = require('promise');
var fs = require('fs');

exports.function = function() {
    return new Promise(function(resolve, reject) {
        fs.readdir('../mob_app/img', (err, files) => {
            resolve(files);
        });
    })
}