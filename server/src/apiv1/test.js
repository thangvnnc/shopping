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
    try {
        var users = await setUsers();
        var user = users[0];
        console.log("user._id  = " + user._id);

        var categorys = await setCategorys(user._id);
        var category = categorys[0];
        console.log("category._id  = " + category._id);

        var products = setProducts(category._id, user._id);
        var product = products[0];
    }
    catch(err) {
        console.log(err);
        return;
    }
    console.log('set data test OK');
}

async function setProducts(category, createdBy) {
    await Product.deleteMany();
    for(var idx = 0; idx < 2; idx++) {
        var product = new Product();
        product.category = category;
        product.name = "product" + idx;
        product.imageUrls = ["url " + idx];
        product.price = 120000;
        product.discount = 120000;
        product.discountKind = 1;
        product.description = "product description " + idx;
        product.auth = "product auth " + idx;
        product.manufacturer = "product manufacturer " + idx;
        product.links = ["link " + idx];
        product.company = "product company " + idx;
        product.createdBy = createdBy;
        product.updatedBy = createdBy;
        await product.save();
    }
    var products = await Product.find();
    return products;
}

async function setUsers() {
    await User.deleteMany()
    for(var idx = 0; idx < 2; idx++) {
        var user = new User();
        user.username = 'user' + idx;
        user.email = 'user'+ idx + '@gmail.com';
        user.setPassword('123456');
        await user.save();
    }
    var users = await User.find();
    return users;
}

async function setCategorys(createdBy) {
    await Category.deleteMany();
    for(var idx = 0; idx < 2; idx++) {
        var category = new Category();
        category.name = "category" + idx;
        category.createdBy = createdBy;
        category.updatedBy = createdBy;
        await category.save();
    }
    var categorys = await Category.find();
    return categorys;
}