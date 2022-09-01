import express from 'express';
import cors from 'cors';
import './db/mongoose';
// ayuda a saber datos de GET
import morgan from 'morgan'
import path from 'path'


import { appGetRouter } from './routes/get';
import { appPostRouter } from './routes/post';
import { appDeleteRouter } from './routes/delete';
import { appPatchRouter } from './routes/update';

import {defaultRouter} from './routes/default';


// middlewares
const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'))

// para accerder a la bbdd usando GET POST DELETE
app.use(appGetRouter);
app.use(defaultRouter);
app.use(appPostRouter);
app.use(appDeleteRouter);
app.use(appPatchRouter);

app.use('/uploads', express.static(path.resolve('uploads')))

const port = process.env.PORT || 8081;

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});