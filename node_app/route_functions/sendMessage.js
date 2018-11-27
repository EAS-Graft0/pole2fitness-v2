var dbHelper = require('../utils/databaseHelper.js')
var Promise = require('promise');

exports.function = function(body) {
    return new Promise(function(resolve, reject) {
        body.message.replace("'", "\'")
        dbHelper.getData('INSERT INTO messages (name, email, message) VALUES ("' + body.name + '","' + body.email + '","' + body.message + '")').then((result) => {
            resolve("Message sent successfully")
        })
    })
}