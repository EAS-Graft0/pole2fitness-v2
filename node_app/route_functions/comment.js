var dbHelper = require('../utils/databaseHelper.js')
var Promise = require('promise');

exports.function = function(body) {
    return new Promise(function(resolve, reject) {
        body.comment = body.comment.replace("'", "`");
        dbHelper.getData("INSERT INTO comments (post_id, name, comment) VALUES (" + body.post_id + ", '" + body.name + "', '" + body.comment + "')").then((res) => {
            resolve("Comment Sent!");
        });
    });
}