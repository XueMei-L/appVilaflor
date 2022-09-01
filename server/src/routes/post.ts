import express from 'express';
import multer from '../libs/multer';    //upload images
import { User } from '../models/user';
import { Product } from '../models/products';

export const appPostRouter = express();


/**
 * Crear un nuevo usuario para bbdd
 */
appPostRouter.post('/users', async (req, res) => {
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
appPostRouter.post('/products', multer.single('file') , async (req, res, next) => {
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