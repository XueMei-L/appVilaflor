import multer from 'multer'
import {v4 as uuid} from 'uuid'
import path from 'path'

// opciones de configuracion, es un metoto que permite
// decidir donde guardar las imagenes

// diskStorage para donde se colocar las imagenes
const storage = multer.diskStorage({
    // en que carpeta guarda las imagenes
    // es igual que _dirname(directorio donde estoy) + /uploads
    destination: 'uploads',
    filename: (req, file, cb) => {
        // null no retornar ningun error
        // retornar el id
        // path.extname como tipo .jpg .png
        cb(null, uuid() + path.extname(file.originalname));
    }
});

//para que lo haga de una vez solamente
export default multer({storage});