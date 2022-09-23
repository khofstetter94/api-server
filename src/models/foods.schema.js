'use strict';

module.exports = (sequelizeDatabase, Datatypes) => {
  return sequelizeDatabase.define('foods', {
    food: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    gluten: {
      type: Datatypes.BOOLEAN,
      allowNull: false,
    },
    dairy: {
      type: Datatypes.BOOLEAN,
      allowNull: false,
    },
    taste: {
      type: Datatypes.ENUM,
      values: ['sweet', 'sour', 'salty', 'bitter', 'umami'],
      allowNull: true,
    },
  });
};
