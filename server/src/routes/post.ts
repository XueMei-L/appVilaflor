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

      res.send({
            user: user
        })
  } catch (err) {
    console.log(err)
    res.status(400).send({ error: 'This email account is already in exist.'})
  }
})

// JWT for login
function jwtSignUser (user) {
    const ONE_WEEK = 60 * 60 * 24 * 7
    return jwt.sign(user, jwtSecret, {
        expiresIn: ONE_WEEK
    })
}

// login
appPostRouter.post('/login', async (req, res) => {
    try {
        const {password} = req.body
        const user = await User.findOne({
          email: req.body.email.toString(),
          password: req.body.password.toString()
        })

        console.log(user)
  
        if (!user) {
          console.log(1111111)
          return res.status(403).send({
            error: 'The login information was incorrect'
          })
        }
        
        console.log(password)
        console.log(user.password)
        if (password !== user.password) {
          console.log(222)
          return res.status(403).send({
            error: 'The login information was incorrect'
          })
        }
  
        const userJson = user.toJSON()
        res.send({
          user: userJson,
          token: jwtSignUser(userJson)
        })
      } catch (err) {
        res.status(500).send({
          error: 'An error has occured trying to log in'
        })
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