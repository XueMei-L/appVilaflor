/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { json } from 'express';
import { User } from '../models/user';
import { Product } from '../models/products';
import fs from 'fs-extra';

export const appGetRouter = express();

/** 
 * For GET  - req.params req.query
 * For POST - req.body
 */

/**
 * Consultar a un usuario -FINISHED
 */
appGetRouter.get('/users', async (req, res) => {
    try {
        const filter = req.query.email? {
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
 * Consultar un producto desde la bbdd - FINISHED
 */
appGetRouter.get('/product', async (req, res) => {
    console.log('1111111111111')
    try {
        const filter = req.query.name? {
            name: req.query.name.toString(),
        }:{};
        const product = await Product.find(filter);

        // forma de encontrar dato concreto
        console.log(product[0]['imagePath'])

        if (product.length !== 0) {
            return res.send(product);
        } else {
            return res.status(404).send();
        }

    } catch (error) {
        return res.status(500).send();
    }
})

/**
 * Consultar imagenes
 */
appGetRouter.get('/files', async(req, res) => {
    try {
        console.log(req.query.name)
        const filter = req.query.name? {
            name: req.query.name.toString(),
        }:{};
        const product = await Product.find(filter);
        // console.log('find')
        // console.log(product[0]['imagePath'])

        // read image file and send to cliet
        const ImgPath = product[0]['imagePath']
        fs.readFile(ImgPath, function(err, data) {
            console.log('find')
            if (err) throw err; // Fail if the file can't be read.
            res.setHeader("Content-Type", "image/jpg");
            res.write(data);
            res.end('ok');
          });
          
    } catch (error) {
        return res.status(500).send();
    }
})


/**
 * Consultar a todos productos
 */
appGetRouter.get('/products',async (req, res) => {
    try {
        const allProduct = await Product.find();
        return res.json(allProduct)
    } catch (err) {
        return res.status(500).send();
    }
})
