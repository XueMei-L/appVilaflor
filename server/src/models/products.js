/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    
    type: {
        type: String,
        require: true,
    },
    
    stock: {
        type: Number,
        require: true
    },

    formOfSale: {
        type: String,
        require: true
    },
    
    pricePerOne: {
        type: Number,
        require: true
    },
})

module.exports = mongoose.model('Product', ProductSchema);