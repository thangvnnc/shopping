var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
    name: {type: String, index: true},
    imageUrls: [{type: String}],
    price: {type: Number},
    discount: {type: String},
    discountKind: {type: Number},
    description: {type: String},
    auth: {type: String},
    manufacturer: {type: String},
    links: [{type: String}],
    company: {type: String},
    createdBy: {type: Date},
    updatedBy: {type: Date},
}, {timestamps: true});

var Product = mongoose.model('product', ProductSchema);

module.exports = Product;