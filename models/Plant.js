const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Plant extends Model {}
Plant.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    height: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sunlight: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    water: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    humidity: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    greenhouse_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'greenhouse',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "plant",
  }
);


module.exports = Plant;
