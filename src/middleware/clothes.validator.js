'use strict';

const clothesValidator = (req, res, next) => {
  let { type, price } = req.body;

  if (type && price) {
    next();
  } else {
    next('Missing required field(s)');
  }
};

module.exports = clothesValidator;
