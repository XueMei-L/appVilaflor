import {Document, Schema, model} from 'mongoose';

/**
 * Interfaz de un product
 */
 interface ProductDocumentInterface extends Document {
    name: string,
    type: string,
    stock: number,
    formOfSale: string,
    pricePerOne: number,
    imgPath: string,
  }
  

const ProductSchema = new Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    
    type: {
        type: String,
        require: true,
    },
    
    stock: {
        type: Number,
        require: true
    },

    formOfSale: {
        type: String,
        require: true
    },
    
    pricePerOne: {
        type: Number,
        require: true
    },

    imgPath: {
        type: String,
        require: true
    }
})

export const Product = model<ProductDocumentInterface>('Product', ProductSchema);

