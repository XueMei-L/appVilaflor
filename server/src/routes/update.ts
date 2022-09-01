/* eslint-disable @typescript-eslint/no-unused-vars */
import express from 'express';
import { User } from '../models/user';
import { Product } from '../models/products';

export const appPatchRouter = express();

/** 
 * For GET  - req.params req.query
 * For POST - req.body
 */

/**
 * Actualización de un producto mediante query string
 */
appPatchRouter.patch('/products', async (req, res) => {
    if (!req.query.name) {
      return res.status(400).send({
        error: 'A name must be provided',
      });
    }
  
    const allowedUpdates = ['name', 'type', 'stock', 'formOfSale', 'pricePerOne', 'imagePath'];
    const actualUpdates = Object.keys(req.body);
    const isValidUpdate =
      actualUpdates.every((update) => allowedUpdates.includes(update));
  
    if (!isValidUpdate) {
      return res.status(400).send({
        error: 'Update is not permitted',
      });
    }
  
    try {
      const product =
      await Product.findOneAndUpdate({name: req.query.name.toString()}, req.body, {
        new: true,
        runValidators: true,
      });
  
      if (!product) {
        return res.status(404).send();
      }
  
      return res.send(product);
    } catch (error) {
      return res.status(400).send(error);
    }
});