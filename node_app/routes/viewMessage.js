var function_module = require('../route_functions/viewMessage.js')
module.exports = function(app) {
    app.get('/api/viewMessage', function(req, res, next) {
        var getResponse = function_module.function(req.query.id)
        getResponse.then(function(response) {
            res.send(response)
        })
    })
}