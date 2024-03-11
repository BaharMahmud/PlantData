const User = require('./User');
const Greenhouse = require('./Greenhouse');
const Plant = require('./Plant');

Greenhouse.hasMany(Plant, {
  foreignKey: 'greenhouse_id',
});

Plant.belongsTo(Greenhouse, {
  foreignKey: 'greenhouse_id',
});

module.exports = { User, Greenhouse, Plant };
