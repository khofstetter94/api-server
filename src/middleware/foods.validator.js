'use strict';

const foodsValidator = (req, res, next) => {
  let { food, gluten, dairy } = req.body;

  if (food && gluten && dairy) {
    next();
  } else {
    next('Missing required field(s)');
  }
};

module.exports = foodsValidator;
