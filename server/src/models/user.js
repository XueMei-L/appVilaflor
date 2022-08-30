/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line no-undef
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type:String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
        // match: RegExp(/\S+@\S+\.\S+/)
    },
    password: {
        type: String,
        require: true,
        // match: RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{6,}$/)
    },
    pedido: {
        type: Array,
    }
})

module.exports = mongoose.model('User', UserSchema);