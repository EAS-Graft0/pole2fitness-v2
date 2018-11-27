var dbHelper = require('../utils/databaseHelper.js')
var Promise = require('promise');

exports.function = function(body) {
    return new Promise(function(resolve, reject) {
    	console.log(body)
        dbHelper.getData("SELECT * FROM schedule WHERE class_id = " + body.class_id).then((result) => {
        	console.log(result)
            for (let i in result) {
                dbHelper.getData("INSERT INTO bookings (class_id, schedule_id, name, email) VALUES (" + body.class_id + "," + result[i].id + ", '" + body.name + "', '" + body.email + "')").then((result) => {
                    resolve("You have successfully booked!")
                })
            }
        })
    })
}