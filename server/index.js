'use strict';
var PORT = process.env.PORT || 99;
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var cookieSession = require('cookie-session');
var mongoose = require('mongoose');
var apiv1 = require('./src/apiv1');

const UserDB = 'thang';
const PassDB = 'thang01652608118';
const HostDB = 'mongodb://' + UserDB + ':' + PassDB + '@ds245647.mlab.com:45647/shop';
mongoose.connect(HostDB, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, poolSize: 10});

app.set('trust proxy', 1) // trust first proxy

app.use(cookieSession({
    secret: 'aBcDeFgHi',
    signed: true,
    // maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));

// Set body parser json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/apiv1', apiv1);

app.listen(PORT, function (err) {
    if (err) {
        console.log(err);
        return;
    }

    console.log('Server started in port: ' + PORT);
});