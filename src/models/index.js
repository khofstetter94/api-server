'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const foodsSchema = require('./foods.schema');
const clothesSchema = require('./clothes.schema');
const ModelInterface = require('./ModelInterface');

const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory' : process.env.DATABASE_URL;

const sequelizeDatabase = new Sequelize(DATABASE_URL);

const FoodsModel = foodsSchema(sequelizeDatabase, DataTypes);
const ClothesModel = clothesSchema(sequelizeDatabase, DataTypes);

module.exports = { sequelizeDatabase,
  foodsInterface: new ModelInterface(FoodsModel),
  clothesInterface: new ModelInterface(ClothesModel),
};
