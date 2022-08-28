/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const mongoose = require('mongoose');

const FrutasSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    
    price: {
        type: Number,
        require: true
    },

    kilo: {
        type: Number,
    }
})

module.exports = mongoose.model('Frutas', FrutasSchema);