'use strict';

const express = require('express');
const foodsRouter = require('./routes/foods');
const clothesRouter = require('./routes/clothes');
const errorHandler = require('./error-handlers/500');
const notFound = require('./error-handlers/404');

const PORT = process.env.PORT || 3002;

const app = express();
app.use(express.json());
app.use(foodsRouter);
app.use(clothesRouter);

app.use('*', notFound);

app.use(errorHandler);

function start() {
  app.listen(PORT, () => console.log('Listening on port: ', PORT));
}

module.exports = { app, start };
