var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

var app = express(); //initialize app

//setup bodyparser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

//setting up views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public'))); //public directory configure

//setting up routes
app.get('/', function (req, res) {
    res.render('index');
});
app.get('/about', function (req, res) {
    res.render('about');
});
app.get('/contact', function (req, res) {
    res.render('contact');
});
app.post('/contact/send', function (req, res) {
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        Auth: {
            user: 'testmail@gmail.com',
            pass: 'testpwd'
        }
    });

    var mailOptions = {
        from: 'Anmol vashistha <anmolvashisthaav@gmail.com>',
        to: 'testauthor@hotmail.com',
        Subject: 'website submission',
        text: 'You have a submission with the following details.. Name = ' + req.body.name + ' email = ' + req.body.email + ' message= ' + req.body.msg,
        html: '<p>You have a submission with the following details.. </p><ul><li>Name :' + req.body.name + '</li><li>Email :' + req.body.email + '</li><li>Message:' + req.body.msg + '</li></ul>'
    }
    transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
            console.log(err);
            res.redirect('/');
        } else
            console.log('Msg sent' + info.response);

    })
});


app.listen(3000);
console.log('server running on port 3000');
