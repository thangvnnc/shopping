'use strict';
var PORT = process.env.PORT || 99;
var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');
var bodyParser = require('body-parser');
var fs = require('fs');
var ejsYield = require('ejs-yield');
var flash = require('connect-flash');
var session = require('express-session');
var cookieSession = require('cookie-session');
var mongoose = require('mongoose');
var User = require('./src/models/user');
var TLog = require('./src/models/tlog');

const UserDB = 'thang';
const PassDB = 'thang01652608118';
const HostDB = 'mongodb://' + UserDB + ':' + PassDB + '@ds245647.mlab.com:45647/shop';
mongoose.connect(HostDB, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, poolSize: 10});

app.set('trust proxy', 1) // trust first proxy
app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(ejsYield);

app.use(cookieSession({
    secret: 'aBcDeFgHi',
    signed: true,
    // maxAge: 24 * 60 * 60 * 1000 // 24 hours
    maxAge: 60 * 1000
}));

// app.use(cookieParser('secretString'));
// app.use(session({
//     secret: 'aBcDeF',
//     resave: true,
//     saveUninitialized: true,
//     cookie: { secure: true }
// }));
app.use(flash());

// Set body parser json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Global error handler - route handlers/middlewares which throw end up here
app.use((err, req, res, next) => {
    console.log(err);
    // response to user with 403 error and details
});

app.get('/createUser', async function(req, res) {
    var username = req.query.username;
    var email = req.query.email;
    var password = req.query.password;
    var user = new User();
    user.email = email;
    user.username = username;
    user.setPassword(password);
    var resultSave = user.save();
    res.send(resultSave);
})

app.get('/login', async function(req, res) {
    var username = req.query.username;
    var password = req.query.password;
    var users = await User.find({ username: username});
    if (users.length > 0) {
        var user = users[0];
        if (user.validPassword(password) !== false) {
            req.session.sessionUser = users[0];
        }
    }
    res.send(users);
})

async function authSession (req, res, next) {
    if (req.session.sessionUser) {
        next();
    }
    else {
        res.send('ERR AUTH');
    }
}

app.get('/testAuth', authSession, async function(req, res) {
    res.send('OK AUTH!');
})

app.get('/writeLog', function(req, res) {
    var tLog = new TLog();
    tLog.content = '###################writeLog###################';
    tLog.save(function(err) {

    })
    res.send('OK!');
})

app.listen(PORT, function (err) {
    if (err) {
        console.log(err);
        return;
    }

    console.log('Server started in port: ' + PORT);
});