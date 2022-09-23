'use strict';

const express = require('express');
// const { FoodsModel } = require('../models');
const { foodsInterface } = require('../models');
const foodsValidator = require('../middleware/foods.validator');

const router = express.Router();

router.post('/foods', foodsValidator, async (req, res, send) => {
  console.log('req body', req.body);

  const newFood = await foodsInterface.create(req.body);
  res.status(200).send(newFood);
});

router.get('/foods', async (req, res, send) => {
  const allFood = await foodsInterface.read();
  res.status(200).send(allFood);
});

router.get('/foods/:id', async (req, res, send) => {
  let { id } = req.params;
  const oneFood = await foodsInterface.read(id);
  res.status(200).send('One Item: ', oneFood);
});

router.put('/foods/:id', async (req, res, send) => {
  let { id } = req.params;
  await foodsInterface.update(id, req.body);
  const updatedFood = await foodsInterface.update(id);
  res.status(200).send(updatedFood);
});

router.delete('/foods/:id', async (req, res, send) => {
  let { id } = req.params;
  await foodsInterface.delete(id),
  res.status(200).send('Food deleted');
});

module.exports = router;
