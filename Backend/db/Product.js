const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:String,
    category:String,
    price:String,
    genre:String,
    userId:String
});

module.exports = mongoose.model("products",productSchema);