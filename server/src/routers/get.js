/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const express = require('express');
const router = express.Router();
// const Fruta = require('../models/frutas')
const User = require('../models/user')


router.get('/', async (req, res) => {
    try {
        const user = await User.find();
        // if (song.length !== 0) {
        //     return res.send(song);
        // }
        res.json(user)
        // return res.status(404).send();
    } catch (err) {
        // return res.status(500).send();
        return res.status(500).json({ message: err.message})
    }
    // res.send('hello world!!');
})



router.post('/', async (req, res) => {
    // crear un nuevo usuario siguendo el Userschema
    const user = new User({
        email: req.body.email,
        password: req.body.password
    });
    try{
        // guardar el usuario en el bbdd
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ menssage: err.menssage })
    }
})


module.exports = router;