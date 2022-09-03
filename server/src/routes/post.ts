/* eslint-disable @typescript-eslint/no-explicit-any */
import express from 'express';
import multer from '../libs/multer';    //upload images
import { User } from '../models/user';
import { Product } from '../models/products';

export const appPostRouter = express();

import jwt from 'jsonwebtoken';

const jwtSecret = process.env.JWT_SECRET || 'secret'


/**
 * Crear un nuevo usuario para bbdd - REGISTER
 */
appPostRouter.post('/register', async (req, res) => {
    try {
     let newUser
      if(req.body.email == 'adminVilaflor@gmail.com') {
        newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            type: 'admin'
        });
      } else {
        newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            type: 'user'
        });
      }
      // guardar el usuario en el bbdd
      const user = await newUser.save();

      const token = jwt.sign(user.toObject(), jwtSecret, {
        expiresIn: 604800 // 1 week
        });
        console.log(token)
        console.log('register')
        res.send({
            user: user,
            token: token
        })
  } catch (err) {
    console.log(err)
    res.status(400).send({ error: 'This email account is already in exist.'})
  }
})

// login
appPostRouter.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({
            where : {
                email: email,
            }
        })

        if(!user) {
            return res.status(403).send({
                error: "The login information was incorrect'"
            })
        }

        const isPasswordValid = password === user.password
        if(!isPasswordValid) {
            return res.status(403).send({
                error: "The login information was incorrect'"
            })
        }

        const userJson = user.toJSON();
        const token = jwt.sign(userJson, jwtSecret, {
            expiresIn: 604800 // 1 week
            });
        
        console.log('here')
        return res.send({
            user: user,
            token: token
        })
    } catch (err) {
        console.log(err)
        return res.status(500).send();
    }
})


/**
 * Crear un nuevo producto para bbdd
 */
appPostRouter.post('/products', multer.single('file') , async (req, res) => {
    try {
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
        res.status(400).send({ error: 'Ya existe este producto.'})
    }
})