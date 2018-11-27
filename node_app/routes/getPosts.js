var function_module = require('../route_functions/getPosts.js')
module.exports = function(app) {
    app.get('/api/getPosts', function(req, res, next) {
        var getResponse = function_module.function()
        getResponse.then(function(response) {
            res.send(response)
        })
    })
}