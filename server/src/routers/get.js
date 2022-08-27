const express = require('express');
const getRouter = express.Router();
const Fruta = require('../models/frutas')

getRouter.get('/', async (req, res) => {
    try {
        const frutas = await Fruta.find();
        // if (song.length !== 0) {
        //     return res.send(song);
        // }
        res.json(frutas)
        // return res.status(404).send();
    } catch (err) {
        // return res.status(500).send();
        return res.status(500).json({ message: err.message})
    }
    // res.send('hello world!!');
})

module.exports = getRouter;