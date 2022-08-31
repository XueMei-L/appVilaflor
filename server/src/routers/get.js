/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const express = require('express');
const router = express.Router();
// const Fruta = require('../models/frutas')
const User = require('../models/user')
const Product = require('../models/products')


/**
 * consultar todos usuarios
 */
// router.get('/users', async (req, res) => {
//     try {
//         const user = await User.find();
//         // if (song.length !== 0) {
//         //     return res.send(song);
//         // }
//         res.json(user)
//         // return res.status(404).send();
//     } catch (err) {
//         // return res.status(500).send();
//         return res.status(500).json({ message: err.message})
//     }
//     // res.send('hello world!!');
// })

/** 
 * For GET  - req.params req.query
 * For POST - req.body
 */

/**
 * 
 */
router.get('/users', async (req, res) => {
    try {
        // introducir emai e passoword para filtrar
        const filter = req.query.email?{
            email: req.query.email.toString(),
            password: req.query.password.toString()
        }:{};
        const user = await User.find(filter);

        // forma de encontrar dato concreto
        console.log(user[0]['email'])


        if (user.length !== 0) {
            return res.send(user);
        } else {
            return res.status(404).send();
        }
    } catch (error) {
        return res.status(500).send();
    }
})


/**
 * Crear un nuevo usuario para bbdd
 */
router.post('/users', async (req, res) => {
    try{
        // guardar el usuario en el bbdd
        const newUser = await User.create(req.body);
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).send({ error: 'This email account is already in exist.'})
    }
})


/**
 * Crear un nuevo producto para bbdd
 */
 router.post('/products', async (req, res) => {
    // console.log('Agregar un nuevo producto')
    try{
        // guardar el producto en el bbdd
        const newProduct = await Product.create(req.body);
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(400).send({ error: 'Ya existe este producto.'})
    }
})


// Para subir imagenes
const controller = require("../middleware/file.controller");
router.post("/upload", controller.upload);
router.get("/files", controller.getListFiles);
router.get("/files/:name", controller.download);

module.exports = router;