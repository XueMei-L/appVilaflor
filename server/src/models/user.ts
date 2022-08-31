import {Document, Schema, model} from 'mongoose';

/**
 * Interfaz de un artista
 */
 interface UserDocumentInterface extends Document {
    username: string,
    email: string,
    password: string,
    pedido: string[]
  }
  

const UserSchema = new Schema({
    username: {
        type:String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
        // match: RegExp(/\S+@\S+\.\S+/)
    },
    password: {
        type: String,
        require: true,
        // match: RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{6,}$/)
    },
    pedido: {
        type: [String],
    }
})

export const User = model<UserDocumentInterface>('User', UserSchema);