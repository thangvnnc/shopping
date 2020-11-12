'use strict'
var express = require('express');
var router = express.Router();
var TLog = require('./models/tlog');
var User = require('./models/user');
var Category = require('./models/category');
var Product = require('./models/product');
var {Permission, UserPermission} = require('./models/permission');

setTestData();
async function setTestData() {
    await setTestDataUser();
}

async function setTestDataUser() {
    // Delete all user
    try {
        await User.deleteMany()
    }
    catch(err) {
        console.log(err);
        return;
    }

    let user = new User();
    user.username = 'test';
    user.email = 'test@gmail.com';
    user.setPassword('123456');
    try {
        await user.save();
    }
    catch(err) {
        console.log(err);
        return;
    }

    try {
        var users = await User.find({});
        console.log(JSON.stringify(users));
    }
    catch(err) {
        console.log(err);
        return;
    }
}