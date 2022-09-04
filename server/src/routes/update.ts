/* eslint-disable @typescript-eslint/no-unused-vars */
import express from 'express';
import { User } from '../models/user';
import { Product } from '../models/products';
import { isIfStatement } from 'typescript';

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

  const allowedUpdates = ['name', 'type', 'stock', 'formOfSale', 'pricePerOne'];
  const actualUpdates = Object.keys(req.body);
  const isValidUpdate =
    actualUpdates.every((update) => allowedUpdates.includes(update));

  if (!isValidUpdate) {
    return res.status(400).send({
      error: 'Update is not permitted',
    });
  }
  try {
    const updateProduct =
    await Product.findOneAndUpdate({name: req.query.name.toString()}, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updateProduct) {
      return res.status(404).send();
    }

    return res.send(updateProduct);
  } catch (error) {
    return res.status(400).send(error);
  }
});


/**
 * Actualizar producto a un usuario determinado
 */

appPatchRouter.patch('/pedido', async (req, res) => {
  console.log(req.query.pedido)
  if (!req.query.email) {
    return res.status(400).send({
      error: 'A email must be provided',
    });
  }

  const allowedUpdates = ['pedido'];
  const actualUpdates = Object.keys(req.body);
  const isValidUpdate =
    actualUpdates.every((update) => allowedUpdates.includes(update));

  if (!isValidUpdate) {
    return res.status(400).send({
      error: 'Update is not permitted',
    });
  }
  try {
    console.log('99')
    const updateShopUser = await User.updateOne(
      { email: req.query.email },
      { $push: { pedido: [req.query.pedido?.toString()] } },
      );
      
      res.status(201).send(updateShopUser);

  } catch (error) {
    console.log('123')
    return res.status(400).send(error);
  }
});

/**
 * Eliminar un producto de la compra en bbdd PEDIDO
 */

 appPatchRouter.patch('/pedido', async (req, res) => {
  console.log(req.query.pedido)
  if (!req.query.email) {
    return res.status(400).send({
      error: 'A email must be provided',
    });
  }

  const allowedUpdates = ['pedido'];
  const actualUpdates = Object.keys(req.body);
  const isValidUpdate =
    actualUpdates.every((update) => allowedUpdates.includes(update));

  if (!isValidUpdate) {
    return res.status(400).send({
      error: 'Update is not permitted',
    });
  }
  try {
    console.log('99')
    const updateShopUser = await User.updateOne(
      { email: req.query.email.toString() },
      { $pop: { pedido: req.query.pedido?.toString() } },
      );
      
      res.status(201).send(updateShopUser);

  } catch (error) {
    console.log('123')
    return res.status(400).send(error);
  }
});