var dbHelper = require('../utils/databaseHelper.js')
var Promise = require('promise');

exports.function = function(class_id) {
    return new Promise(function(resolve, reject) {
        dbHelper.getData("SELECT name, day, date FROM classes JOIN schedule ON schedule.class_id = classes.id WHERE class_id = " + class_id).then((classes) => {
            resolve(classes)
        })
    })
}