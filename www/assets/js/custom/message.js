'use strict'
class R {}
class Define{}
R.DEF = Define;
Define.OK                       = {code: 0,     codeText: 'OK',                 message: 'Success'};
Define.ERR_API_AUTH             = {code: 100,   codeText: 'ERR_API_AUTH',       message: 'Error login or session expired!\nPlease renew session.'};
Define.ERR_API_USER_EXIST       = {code: 101,   codeText: 'ERR_API_USER_EXIST', message: 'Username or email: is already taken'};
Define.ERR_API_USER_LOGIN       = {code: 102,   codeText: 'ERR_API_USER_LOGIN', message: 'Login failed!'};
Define.ERR_API_UNKNOWN          = {code: 999,   codeText: 'ERR_API_UNKNOWN',    message: 'Unknown'};
