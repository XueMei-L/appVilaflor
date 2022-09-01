import express from 'express';
import { User } from '../models/user';
import { Product } from '../models/products';
import multer from '../libs/multer';


export const router = express.Router();


/** 
 * For GET  - req.params req.query
 * For POST - req.body
 */

/**
 * 
 */
router.get('/users', async (req, res) => {
    try {
        const filter = req.query.email?{
            email: req.query.email.toString(),
        }:{};
        const user = await User.find(filter);

        // forma de encontrar dato concreto
        console.log(user[0]['username'])

        if (user.length !== 0) {
            return res.send(user);
        } else {
            return res.status(404).send();
        }
    } catch (error) {
        return res.status(500).send();
    }
})


/**
 * Crear un nuevo usuario para bbdd
 */
router.post('/users', async (req, res) => {
    try{
        // guardar el usuario en el bbdd
        const newUser = await User.create(req.body);
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).send({ error: 'This email account is already in exist.'})
    }
})



router.get('/products', async (req, res) => {
    try {
        const filter = req.query.name?{
            name: req.query.name.toString(),
        }:{};
        const product = await Product.find(filter);

        // forma de encontrar dato concreto
        console.log(product[0]['imgPath'])

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
 * Crear un nuevo producto para bbdd
 */
router.post('/products', multer.single('image'), async (req, res) => {
    console.log('Here, funcion de post de products')
    // console.log('Agregar un nuevo producto')
    console.log(req.file)
    try{
        if (req.file) {
            // guardar el producto en el bbdd
            const newProduct = new Product({
                name: req.body.name,
                type: req.body.type,
                stock: req.body.stock,
                formOfSale: req.body.formOfSale,
                pricePerOne: req.body.pricePerOne,
                imagePath: req.file.path,
            });

            const product = await newProduct.save();
            console.log(JSON.stringify(product))
            res.status(201).json(product);
        }

    } catch (err) {
        res.status(400).send({ error: 'Ya existe este producto.'})
    }
})

// Subir fotos
// router.post('/imgs', multer.single('image') , async (req, res) => {
//     // console.log(req.body)
//     console.log(req.file?.path)
//     try {
//         const newImage = new Image({
//             name: req.body.name,
//             description: req.body.description,
//             imgPath: req.file?.path
//         });
//         console.log('posted')
//         const image = await newImage.save();
//         console.log(image);
        
//         // console.log(JSON.stringify(image))
//         res.status(201).send({ menssage: 'Succesfully!!'})
//     } catch (err) {
//         res.status(400).send({ error: 'Ya existe este img.'})
//     }
// })

// router.get('/imgs', async (req, res) => {
//     console.log('Here')

//     try {
//         const filter = req.query.name?{
//             name: req.query.name.toString(),
//         }:{};
//         const img = await Image.find(filter);

//         // forma de encontrar dato concreto
//         console.log(img[0]['imgPath'])

//         if (img.length !== 0) {
//             return res.send(img);
//         } else {
//             return res.status(404).send();
//         }
//     } catch (error) {
//         return res.status(500).send();
//     }

// })
