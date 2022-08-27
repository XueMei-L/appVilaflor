const mongoose = require('mongoose');

const FrutasSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    kilo: {
        type: Number,
        require: true
    },
    price: {
        type: Number,
        require: true
    }
})

module.exports = mongoose.model('Frutas', FrutasSchema);