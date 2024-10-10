const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    ProductName: { type: String },
    ProductImg: { type: String },
    Price: { type: Number },
    More_details: { type: String },
    ExpireDate:{type: String},
    Rating: { type: String } ,// or Number, depending on your use case
    id: { type: Number }
});

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;