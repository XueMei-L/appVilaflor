/* eslint-disable @typescript-eslint/no-explicit-any */
import express from 'express';
import { User } from '../models/user';
import { Product } from '../models/products';
import fs from 'fs-extra';

export const appGetRouter = express();

/**
 * Consultar a un usuario
 */
appGetRouter.get('/users', async (req, res) => {
    try {
        const filter = req.query.email? {
            email: req.query.email.toString(),
        }:{};
        const user = await User.find(filter);

        if (user.length !== 0) {
            return res.status(200).send(user[0].email)
        } else {
            return res.status(404).send();
        }
    } catch (error) {
        return res.status(500).send();
    }
})

appGetRouter.get('/pedido', async (req, res) => {
    try {
        const filter = req.query.email? {
            email: req.query.email.toString(),
        }:{};
        const user = await User.find(filter);

        if (user.length !== 0) {
            return res.status(200).send(user)
        } else {
            res.status(400).send({message: 'error'})
        }
    } catch (error) {
        return res.status(500).send();
    }
})
    


/**
 * Consultar un producto desde la bbdd - FINISHED
 */
appGetRouter.get('/product', async (req, res) => {
    try {
        const filter = req.query.name? {
            name: req.query.name.toString(),
        }:{};
        const product = await Product.find(filter);


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
        const filter = req.query.name? {
            name: req.query.name.toString(),
        }:{};
        const product = await Product.find(filter);

        // read image file and send to cliet
        const ImgPath = product[0]['imagePath']
        fs.readFile(ImgPath, function(err, data) {
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
 * Consultar a todos los productos
 */
appGetRouter.get('/products',async (req, res) => {
    try {
        const filter = req.query.type? {
            type: req.query.type.toString(),
        }:{};
        const allProduct = await Product.find(filter);
        return res.status(200).json(allProduct)
    } catch (err) {
        return res.status(500).send();
    }
})

/**
 * Consultar algunos productos
 */
appGetRouter.get('/productSearch',async (req, res) => {
    const a = JSON.stringify(req.query.name)
    const p = a.replace(/"/g, "").toUpperCase()
    try {
        const list:any = [];
        const allProduct = await Product.find();
        allProduct.forEach(element => {
            if(element['name'].includes(p)) {
                list.push(element)
            }
        });
            return res.status(200).send(list);
    } catch (err) {
        return res.status(500).send();
    }
})