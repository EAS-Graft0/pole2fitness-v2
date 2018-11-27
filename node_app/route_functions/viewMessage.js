var dbHelper = require('../utils/databaseHelper.js')
var Promise = require('promise');

exports.function = function(id) {
    return new Promise(function(resolve, reject) {
        dbHelper.getData("UPDATE messages SET opened=1 WHERE id = " + id).then((res) => {
            resolve()
        })
    })
}