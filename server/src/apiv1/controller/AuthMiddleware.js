var R = require('../common/Response');

'use strict'
class AuthMiddleware {}
AuthMiddleware.authSession = function (req, res, next) {
    if (req.session.sessionUser) {
        next();
        return
    }
    res.send(R.Builder.buildResAPI(R.DEF.ERR_API_AUTH));
    return;
}
module.exports = AuthMiddleware;
