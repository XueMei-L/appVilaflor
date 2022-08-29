/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const defaultRouter = express.Router();

/**
 * Default Router
 */
defaultRouter.all('*', (_, res) => {
  res.status(501).send();
});

module.exports = defaultRouter;