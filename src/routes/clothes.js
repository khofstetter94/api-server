'use strict';

const express = require('express');
// const { ClothesModel } = require('../models');
const { clothesInterface } = require('../models');
const clothesValidator = require('../middleware/clothes.validator');

const router = express.Router();

router.post('/clothes', clothesValidator, async (req, res, send) => {
  console.log('req body', req.body);

  const newClothes = await clothesInterface.create(req.body);
  res.status(200).send(newClothes);
});

router.get('/clothes', async (req, res, send) => {
  const allClothes = await clothesInterface.read();
  res.status(200).send(allClothes);
});

router.get('./clothes/:id', async (req, res, send) => {
  let { id } = req.params;
  const oneClothes = await clothesInterface.read(id);
  res.status(200).send('One clothes', oneClothes);
});

router.put('/clothes/:id', async (req, res, send) => {
  let { id } = req.params;
  await clothesInterface.update(id, req.body);
  const updatedClothes = await clothesInterface.read(id);
  res.status(200).send(updatedClothes);
});

router.delete('/clothes/:id', async (req, res, send) => {
  let { id } = req.params;
  await clothesInterface.destroy(id),
  res.status(200).send('Clothing deleted');
});

module.exports = router;
