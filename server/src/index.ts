// require('dotenv').config();

// const path = require('path')
// app.use('/', express.static(path.resolve('uploads')))


import express from 'express';
import cors from 'cors';
import './db/mongoose';

import { router } from './routers/get';
// import {postRouter} from './routers/post';
// import {patchRouter} from './routers/patch';
// import {deleteRouter} from './routers/delete';
import {defaultRouter} from './routers/default';

const app = express();
app.use(express.json());
app.use(cors());

// para accerder a la bbdd usando GET POST DELETE
app.use(router);
app.use(defaultRouter);
// app.use(postRouter);
// app.use(patchRouter);
// app.use(deleteRouter);


const port = process.env.PORT || 8081;

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});