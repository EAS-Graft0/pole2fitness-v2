var dbHelper = require('../utils/databaseHelper.js')
var Promise = require('promise');

exports.function = function(body) {
    return new Promise(function(resolve, reject) {
        dbHelper.getData("SELECT DISTINCT(email), name FROM bookings WHERE class_id = " + body.class_id).then((classInfo) => {
            resolve(classInfo)
        })
    })
}