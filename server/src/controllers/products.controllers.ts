/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from 'express'
// import fs from 'fs-extra';
import path from 'path'

// Models
import { Product } from '../models/products';

export async function getPhotos(req: Request, res: Response): Promise<Response> {
    const product = await Product.find();
    return res.json(product);
}

export async function createPhoto(req: Request, res: Response): Promise<Response> {
    const { name, type, stock, formOfSale, pricePerOne } = req.body;
    const newPhoto = { name, type, stock, formOfSale, pricePerOne, imagePath: req.file.path };
    const photo = new Product(newPhoto);
    await photo.save();
    return res.json({
        message: 'Photo Saved Successfully',
        photo
    });
}
