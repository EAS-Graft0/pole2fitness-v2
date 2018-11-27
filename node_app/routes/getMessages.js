var function_module = require('../route_functions/getMessages.js')
module.exports = function(app) {
    app.get('/api/getMessages', function(req, res, next) {
        var getResponse = function_module.function()
        getResponse.then(function(response) {
            res.send(response)
        })
    })
}