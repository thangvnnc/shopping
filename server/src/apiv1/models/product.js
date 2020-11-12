var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new mongoose.Schema({
    name: {type: String, index: true},
    imageUrls: [{type: String}],
    price: {type: Number},
    discount: {type: String},
    discountKind: {type: Number},
    description: {type: String},
    auth: {type: String, index: true},
    manufacturer: {type: String, index: true},
    links: [{type: String}],
    company: {type: String, index: true},
    state: {type: Number, default: 1},
    createdBy: { type: Schema.Types.ObjectId, ref: 'user' },
    updatedBy: { type: Schema.Types.ObjectId, ref: 'user' },
}, {timestamps: true});

var Product = mongoose.model('product', ProductSchema);

module.exports = Product;