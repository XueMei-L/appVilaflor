/* eslint-disable @typescript-eslint/no-unused-vars */
import express from 'express';
import { User } from '../models/user';
import { Product } from '../models/products';
import multer from '../libs/multer';
import fs from 'fs-extra'
import { config } from 'dotenv';

export const appGetRouter = express();

/** 
 * For GET  - req.params req.query
 * For POST - req.body
 */

/**
 * Consultar a un usuario
 */
appGetRouter.get('/users', async (req, res) => {
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
 * Consultar un producto desde la bbdd
 */
appGetRouter.get('/products', async (req, res) => {
    try {
        const filter = req.query.name?{
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