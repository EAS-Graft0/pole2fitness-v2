var dbHelper = require('../utils/databaseHelper.js')
var Promise = require('promise');
const nodemailer = require('nodemailer');

exports.function = function(body) {
    return new Promise(function(resolve, reject) {

        var transporter = nodemailer.createTransport('smtp://pole2fitness%40hotmail.co.uk:polefitness1471@smtp-mail.outlook.com');

        body.message.replace("'", "\'")
        dbHelper.getData('INSERT INTO messages (name, email, message) VALUES ("Lee", "pole2fitness@hotmail.co.uk", "' + body.message + '")').then((result) => {

            let mailOptions = {
                from: 'pole2fitness@hotmail.co.uk', // sender address
                to: body.email, // list of receivers
                subject: body.subject, // Subject line
                // text: "Your Order", // plain text body
                html: body.message // html body
            };

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    reject(error);
                }
                resolve("Message sent successfully");
            });

        })
    })
}