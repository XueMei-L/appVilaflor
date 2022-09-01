/* eslint-disable @typescript-eslint/no-unused-vars */
import express from 'express';
import { User } from '../models/user';
import { Product } from '../models/products';
import { Image } from '../models/image';
import multer from '../libs/multer';
import fs from 'fs-extra'
import { config } from 'dotenv';


export const router = express();


/** 
 * For GET  - req.params req.query
 * For POST - req.body
 */

/**
 * 
 */
router.get('/users', async (req, res) => {
    try {
        const filter = req.query.email?{
            email: req.query.email.toString(),
        }:{};
        const user = await User.find(filter);

        // forma de encontrar dato concreto
        console.log(user[0]['username'])

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
 * Consultar un producto desde la bbdd
 */
router.get('/products', async (req, res) => {
    try {
        const filter = req.query.name?{
            name: req.query.name.toString(),
        }:{};
        const product = await Product.find(filter);

        // forma de encontrar dato concreto
        console.log(product[0]['imgPath'])

        if (product.length !== 0) {
            return res.send(product);
        } else {
            return res.status(404).send();
        }
    } catch (error) {
        return res.status(500).send();
    }
})





// Crear un nuevo producto
router.post('/products', multer.single('file') , async (req, res, next) => {
    try {
        console.log('Here')
        const newProduct = new Product({
            name: req.body.name,
            type: req.body.type,
            stock: req.body.stock,
            formOfSale: req.body.formOfSale,
            pricePerOne: req.body.pricePerOne,
            imagePath: req.file?.path
        });
        const product = await newProduct.save();
        console.log(product);
        res.status(201).json(product);
    } catch (err) {
        res.status(400).send({ error: 'Ya existe este img.'})
    }
})