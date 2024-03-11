const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Greenhouse extends Model {}

Greenhouse.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
 
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'greenhouse',
  }
);

module.exports = Greenhouse;
