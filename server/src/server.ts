/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();
// const express = require('express')
// const cors = require('cors')
import cors from 'cors'
import express from 'express'

// connection to mongodb
const databaseURL = process.env.MONGODB_URL || 'mongodb://localhost/vilaflor';

const mongoose = require('mongoose');
mongoose.connect(databaseURL, { 
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connection to MongoDB server established');
}).catch(() => {
  console.log('Unnable to connect to MongoDB server');
});
// const db = mongoose.connection;
// db.on('error', (error) => console.error(error));
// db.once('open', () => console.log('Connected to database!'));




const app = express()
app.use(express.json())
app.use(cors())


// para accerder a la bbdd usando GET POST DELETE
const router = require('./routers/get');
const defaultRouter = require( './routers/default');

app.use(router);
app.use(defaultRouter);

const path = require('path')
app.use('/', express.static(path.resolve('uploads')))


const port = process.env.PORT || 8081;

app.listen(port, () => {
  console.log(`app is up on port ${port}`)
});