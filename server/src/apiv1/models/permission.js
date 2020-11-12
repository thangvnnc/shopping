var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var PermissionSchema = new mongoose.Schema({
    description: {type: String},
    state: {type: Number, default: 1},
}, {timestamps: true});

var UserPermissionSchema = new mongoose.Schema({
    user: { type: Schema.Types.ObjectId, ref: 'user' },
    permission: { type: Schema.Types.ObjectId, ref: 'permission' },
    state: {type: Number, default: 1},
}, {timestamps: true});

var Permission = mongoose.model('permission', PermissionSchema);
var UserPermission = mongoose.model('user_permission', UserPermissionSchema);
module.exports = {Permission: Permission, UserPermission: UserPermission};