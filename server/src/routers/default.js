const express = require('express');
const defaultRouter = express.Router();

/**
 * Default Router
 */
defaultRouter.all('*', (_, res) => {
  res.status(501).send();
});

module.exports = defaultRouter;