'use strict';

module.exports = (sequelizeDatabase, DataTypes) => {
  return sequelizeDatabase.define('clothes', {
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fabric: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    store: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};
