var dbHelper = require('../utils/databaseHelper.js')
var Promise = require('promise');

exports.function = function() {
    return new Promise(function(resolve, reject) {
        dbHelper.getData("SELECT * FROM posts").then((posts) => {
            var promiseArray = [];
            for (let i in posts) {
                promiseArray.push(new Promise((resolve, reject) => {
                    dbHelper.getData("SELECT * FROM comments WHERE post_id = " + posts[i].id).then((comments) => {
                        posts[i].comments = comments;
                        resolve()
                    })
                }))
            }
            Promise.all(promiseArray).then((comments) => {
                resolve(posts);
            });
        });
    });
}