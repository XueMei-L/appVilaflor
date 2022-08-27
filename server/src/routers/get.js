const express = require('express');
const getRouter = express.Router();

getRouter.get('/', (req, res) => {
    // try {
    //     const song = await Song.find(filter);
    //     if (song.length !== 0) {
    //         return res.send(song);
    //     }
    //     return res.status(404).send();
    // } catch (error) {
    //     return res.status(500).send();
    // }
    res.send('hello world!!');
})

module.exports = getRouter;