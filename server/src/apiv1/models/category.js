var mongoose = require('mongoose');

var CategorySchema = new mongoose.Schema({
    name: {type: String, index: true},
}, {timestamps: true});

var Category = mongoose.model('category', CategorySchema);

module.exports = Category;