'use strict'
var express = require('express');
var router = express.Router();
var R = require('../common/Response');
var User = require('../models/user');

router.post('/register', async function (req, res) {
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;

    var users = await User.find().or([
        {email: email},
        {username: username}
    ]).exec();

    if (users.length > 0) {
        res.send(R.Builder.buildResAPI(R.DEF.ERR_API_USER_EXIST));
        return;
    }

    var user = new User();
    user.email = email;
    user.username = username;
    user.setPassword(password);
    var resultSave = await user.save();
    res.send(R.Builder.buildResAPI(R.DEF.OK, resultSave));
})


router.post('/login', async function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    var users = await User.find({ username: username});
    if (users.length <= 0) {
        res.send(R.Builder.buildResAPI(R.DEF.ERR_API_USER_LOGIN));
        return;
    }

    var user = users[0];
    if (user.validPassword(password) === false) {
        res.send(R.Builder.buildResAPI(R.DEF.ERR_API_USER_LOGIN));
        return;
    }

    req.session.sessionUser = user;
    res.send(R.Builder.buildResAPI(R.DEF.OK, user));
})

module.exports = router;
