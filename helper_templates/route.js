var function_module = require('../route_functions/<%= name %>.js')
module.exports = function(app) {
    app.get('/api/<%= name %>', function(req, res, next) {
        var getResponse = function_module.function()
        getResponse.then(function(response) {
            res.send(response)
        })
    })
}