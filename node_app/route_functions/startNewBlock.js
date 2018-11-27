var dbHelper = require('../utils/databaseHelper.js')
var Promise = require('promise');

exports.function = function(body) {
    return new Promise(function(resolve, reject) {
        dbHelper.getData("DELETE FROM bookings WHERE id > 0").then((result) => {
            dbHelper.getData("DELETE FROM schedule WHERE id > 0").then((result) => {
                console.log(body)
                for (let i in body) {
                    for (let j in body[i]) {
                        dbHelper.getData("INSERT INTO schedule (class_id, date) VALUES (" + i.split('class')[1] + ", '" + body[i][j].substring(0, 19) + "')")
                    }
                }
                resolve('New Block Started!')
            })
        })
    })
}