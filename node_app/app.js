var express = require("express");
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');
var appConfig = require('./conf/appConfig.js');

var app = express();
// Set global Express headers
var ua;

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     // ua = req.header('user-agent');
//     // console.log(ua)
//     // 
//     ua = req.header('user-agent');
//     if (/mobile|iphone|ipod|android|blackberry|opera|mini|windows\sce|palm|smartphone|iemobile|ipad|android|android 3.0|xoom|sch-i800|playbook|tablet|kindle/i.test(ua)) {
//         console.log('mobile')
//         app.use(express.static('../mob_app'));
//         next();
//     } else {
//         console.log('desktop')
//         app.use(express.static('../ang_app'));
//         next();
//     }
//     // 

// });

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({
//     extended: true
// }));

// function checkMobile() {
//     app.use(function(req, res, next) {
//         res.header("Access-Control-Allow-Origin", "*");
//         res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//         // ua = req.header('user-agent');
//         // console.log(ua)
//         // 
//         ua = req.header('user-agent');
//         if (/mobile|iphone|ipod|android|blackberry|opera|mini|windows\sce|palm|smartphone|iemobile|ipad|android|android 3.0|xoom|sch-i800|playbook|tablet|kindle/i.test(ua)) {
//             console.log('mobile')
//             app.use(express.static('../mob_app'));
//             next();
//         } else {
//             console.log('desktop')
//             app.use(express.static('../ang_app'));
//             next();
//         }
//         // 
//     });
// }


// app.get('/', (req, res, next) => {
//     ua = req.header('user-agent');
//     if (/mobile|iphone|ipod|android|blackberry|opera|mini|windows\sce|palm|smartphone|iemobile|ipad|android|android 3.0|xoom|sch-i800|playbook|tablet|kindle/i.test(ua)) {
//         console.log('mobile')
//         // app.use(express.static('../mob_app'));
//         next();
//     } else {
//         console.log('desktop')
//         app.use(express.static('../ang_app'));
//         next();
//     }
// })
// app.get('*', (req, res, next) => {
//     ua = req.header('user-agent');
//     if (/mobile|iphone|ipod|android|blackberry|opera|mini|windows\sce|palm|smartphone|iemobile|ipad|android|android 3.0|xoom|sch-i800|playbook|tablet|kindle/i.test(ua)) {
//         console.log('mobile')
//         // app.use(express.static('../mob_app'));
//         next();
//     } else {
//         console.log('desktop')
//         app.use(express.static('../ang_app'));
//         next();
//     }
// })


// Serve static files from angular app dist folder

// Add all routes
fs.readdirSync(path.join(__dirname, 'routes')).forEach(function(file) {
    if (file[0] === '.') {
        console.log('error')
        return;
    }
    require(path.join(__dirname, 'routes', file))(app);
});


/*MOB APP*/

// var mobile_app = express();
// mobile_app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });
// mobile_app.use(bodyParser.json())
// mobile_app.use(bodyParser.urlencoded({
//     extended: true
// }));
// mobile_app.use(express.static('../mob_app'))

// // Add all routes
// fs.readdirSync(path.join(__dirname, 'routes')).forEach(function(file) {
//     if (file[0] === '.') {
//         return;
//     }
//     require(path.join(__dirname, 'routes', file))(mobile_app);
// });
// mobile_app.listen(81);

/*MOB APP*/

// Start listening
app.listen(80, () => {
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        ua = req.header('user-agent');
        if (/mobile|iphone|ipod|android|blackberry|opera|mini|windows\sce|palm|smartphone|iemobile|ipad|android|android 3.0|xoom|sch-i800|playbook|tablet|kindle/i.test(ua)) {
            console.log('mobile')
            app.use(express.static('../mob_app'));
        } else {
            console.log('desktop')
            app.use(express.static('../ang_app'));
        }
        next();
    });
});
console.log('app listening on port: 80');