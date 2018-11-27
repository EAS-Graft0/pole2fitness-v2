var dbHelper = require('../utils/databaseHelper.js')
var Promise = require('promise');

exports.function = function(body) {
    return new Promise(function(resolve, reject) {
        body.post.replace("'", "\'");
        dbHelper.getData("INSERT INTO posts (name, post) VALUES ('" + body.name + "', '" + body.post + "')").then((res) => {
            resolve("New post success")
        });
    });
}