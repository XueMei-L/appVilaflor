// require('dotenv').config();

import express from 'express';
import cors from 'cors';
import './db/mongoose';
// ayuda a saber datos de GET
import morgan from 'morgan'
import path from 'path'


import { router } from './routers/get';
// import {postRouter} from './routers/post';

// import {patchRouter} from './routers/patch';
// import {deleteRouter} from './routers/delete';
import {defaultRouter} from './routers/default';


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

app.use('/uploads', express.static(path.resolve('uploads')))


const port = process.env.PORT || 8081;

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});