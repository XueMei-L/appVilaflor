require('dotenv').config();
const express = require('express')
const cors = require('cors')

const databaseURL = process.env.MONGODB_URL || 'mongodb://localhost/vilaflor';

const mongoose = require('mongoose');
mongoose.connect(databaseURL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to database!'));

const app = express()
app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.send("Hello World!");
});


const port = process.env.PORT || 8081;

app.listen(port, () => {
  console.log(`app is up on port ${port}`)
});