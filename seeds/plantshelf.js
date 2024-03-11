const sequelize = require('../config/connection');
const seedGreenhouse = require('./greenhouseData');
const seedPlants = require('./plantData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedGreenhouse();

  await seedPlants();

  process.exit(0);
};

seedAll();
