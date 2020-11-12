var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategorySchema = new mongoose.Schema({
    name: {type: String, index: true},
    state: {type: Number, default: 1},
    createdBy: { type: Schema.Types.ObjectId, ref: 'user' },
    updatedBy: { type: Schema.Types.ObjectId, ref: 'user' },
}, {timestamps: true});

var Category = mongoose.model('category', CategorySchema);

module.exports = Category;