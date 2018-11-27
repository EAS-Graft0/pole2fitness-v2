var function_module = require('../route_functions/getClasses.js')
module.exports = function(app) {
    app.get('/api/getClasses', function(req, res, next) {
        var getResponse = function_module.function()
        getResponse.then(function(response) {
            res.send(response)
        })
    })
}