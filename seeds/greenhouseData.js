const { Greenhouse } = require('../models');

const greenhousedata = [
  {
    name: 'GreenHouse Tree',
    type: 'Tree',
   
  },
  {
    name: 'GreenHouse Sucullent',
    type: 'Sucullent',
  },
  {
    name: 'GreenHouse Perennial',
    type: 'Perennial',
  },
  {
    name: 'GreenHouse Shrub',
    type: 'Shrub',
  },


  {
    name: 'GreenHouse Vine',
    type: 'Vine',
  },
 
  {
    name: 'GreenHouse Epiphyte',
    type: 'Epiphyte',
  },
  
];

const seedGreenhouse = () => Greenhouse.bulkCreate(greenhousedata);

module.exports = seedGreenhouse;
