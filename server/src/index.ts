import express from 'express';
import cors from 'cors';
import './db/mongoose';
// ayuda a saber datos de GET
import morgan from 'morgan'
// import path from 'path'


import { router } from './routes/get';
// import {postRouter} from './routers/post';

// import {patchRouter} from './routers/patch';
// import {deleteRouter} from './routers/delete';
import {defaultRouter} from './routes/default';


// middlewares
const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'))

// para accerder a la bbdd usando GET POST DELETE
app.use(router);
app.use(defaultRouter);
// app.use(postRouter);
// app.use(patchRouter);
// app.use(deleteRouter);



// import bodyParser from 'body-parser';

// app.use(bodyParser.json({limit: '50mb'}));
// app.use(bodyParser.urlencoded({  
//   extended: true
// }));
// app.use(express.urlencoded({ extended: true }));

// app.use('/uploads', express.static(path.resolve('uploads')))

const port = process.env.PORT || 8081;

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});