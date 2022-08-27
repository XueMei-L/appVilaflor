require('dotenv').config();
const express = require('express')
const cors = require('cors')

// connection to mongodb
const databaseURL = process.env.MONGODB_URL || 'mongodb://localhost/vilaflor';

const mongoose = require('mongoose');
mongoose.connect(databaseURL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to database!'));


const app = express()
app.use(express.json())
app.use(cors())


// importar get, y luego usa /frutas como el directorio
// const defaultRouter = require('./routers/default');
// app.use('/', defaultRouter)

const getRouter = require('./routers/get');
app.use('/frutas', getRouter)



const port = process.env.PORT || 8081;

app.listen(port, () => {
  console.log(`app is up on port ${port}`)
});