var function_module = require('../route_functions/getClassSchedule.js')
module.exports = function(app) {
    app.get('/api/getClassSchedule', function(req, res, next) {
        var getResponse = function_module.function(req.query.class_id)
        getResponse.then(function(response) {
            res.send(response)
        })
    })
}