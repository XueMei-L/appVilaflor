import {ConnectOptions, connect}  from 'mongoose';

const databaseURL = process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/vilaflor';

connect(databaseURL, 
    {   useNewUrlParser: true,
        useUnifiedTopology: false,
    } as ConnectOptions)
.then(() => {
    console.log('Connection to MongoDB server established');
}).catch((err) => {
    console.log(err)
    console.log('Unnable to connect to MongoDB server');
});
