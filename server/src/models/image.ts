import {Document, Schema, model} from 'mongoose';

/**
 * Interfaz de un artista
 */
 interface ImageDocumentInterface extends Document {
    name: string,
    description: string,
    imgPath: string,
  }
  

const ImageSchema = new Schema({
    name: {
        type:String,
        require: true,
    },
    description: {
        type: String,
    },
    imgPath: {
        type: String,
    }
})

export const Image = model<ImageDocumentInterface>('Image', ImageSchema);