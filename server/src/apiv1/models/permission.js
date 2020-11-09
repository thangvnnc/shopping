var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);

var PermissionSchema = new mongoose.Schema({
    id: {type: Number, index: true, unique: true},
    name: {type: String},
    description: {type: String},
}, {timestamps: true});

PermissionSchema.plugin(autoIncrement.plugin, {
    model: 'permission',
    field: 'id',
    startAt: 1000,
    incrementBy: 1
});

PermissionSchema.plugin(uniqueValidator, {message: 'is already taken.'});

var Permission = mongoose.model('permission', PermissionSchema);
module.exports = {Permission};