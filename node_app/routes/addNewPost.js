var function_module = require('../route_functions/addNewPost.js')
module.exports = function(app) {
    app.post('/api/addNewPost', function(req, res, next) {
    	console.log(req.body)
        var getResponse = function_module.function(req.body)
        getResponse.then(function(response) {
            res.send(response)
        })
    })
}