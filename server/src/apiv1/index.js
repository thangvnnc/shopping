'use strict'
var express = require('express');
require('express-async-errors');
var router = express.Router();
var TLog = require('./models/tlog');
var R = require('./common/Response');
var UserController = require('./controller/UserController');

//// write log all router
// router.use('/*', function (req, res, next) {
//     var bodyText = JSON.stringify(req.body);
//     TLog.writeLog('body: ' + bodyText);
//     next();
// })
router.use('/user', UserController);
router.use(function(err, req, res, next) {
    TLog.writeLog(err.message);
    res.send(R.Builder.buildResAPI(R.DEF.ERR_API_UNKNOWN));
});
module.exports = router;