/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line no-undef
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        // match: RegExp(/\S+@\S+\.\S+/)
    },
    password: {
        type: String,
        required: true,
        // match: RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,}$/)
    },
    pedido: {
        type: Array,
    }
})

module.exports = mongoose.model('User', UserSchema);