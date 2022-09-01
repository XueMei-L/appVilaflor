/* eslint-disable @typescript-eslint/no-unused-vars */
import express from 'express';
import { User } from '../models/user';
import { Product } from '../models/products';

export const appDeleteRouter = express();

/** 
 * For GET  - req.params req.query
 * For POST - req.body
 */

/**
 * Eliminar un producto
 */

appDeleteRouter.delete('/products', async (req, res) => {
    if (!req.query.name) {
      return res.status(400).send({
        error: 'A name must be provided',
      });
    }
  
    try {
      const product = await Product.findOneAndDelete({title: req.query.name.toString()});
  
      if (!product) {
        return res.status(404).send();
      }
  
      return res.send(product);
    } catch (error) {
      res.status(400).send();
    }
});