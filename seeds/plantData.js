const { Plant } = require('../models');

const plantdata = [
  {
    "name": "Fiddle Leaf Fig",
    "type": "Tree",
    "height": "Up to 10 feet indoors",
    "water": "Moderate,prefers evenly moist soil",
    "sunlight": "Bright, indirect light.",
    "humidity": "Moderate to high",
    "greenhouse_id": "1"

  },
  {
    "name": "Snake Plant",
    "type": "Succulent",
    "height": "1 to 4 feet",
    "water": "Low; allow soil to dry between waterings",
    "sunlight": "Low to bright, indirect light",
    "humidity": "Low",
    "greenhouse_id": "2"
  },
  {
    "name": "Spider Plant",
    "type": "Perennial",
    "height": "1 to 2 feet",
    "water": "Moderate; keep soil evenly moist",
    "sunlight": "Indirect light; can tolerate some direct sunlight",
    "humidity": "Moderate",
    "greenhouse_id": "3"
  },
  {
    "name": "Wax Plant (Hoya)",
    "type": "Vine/Shrub",
    "height": "Varies (depends on the species)",
    "water": "Moderate; let the top inch of soil dry before watering",
    "sunlight": "Bright, indirect light",
    "humidity": "Moderate",
    "greenhouse_id": "4"
  },
  {
    "name": "Monstera",
    "type": "Vine",
    "height": "Up to 10 feet",
    "water": "Moderate; keep soil evenly moist",
    "sunlight": "Bright, indirect light",
    "humidity": "Moderate",
    "greenhouse_id": "5"
  },
  {
    "name": "ZZ Plant (Zamioculcas Zamiifolia)",
    "type": "Rhizomatous Perennial",
    "height": "2 to 3 feet",
    "water": "Low; allow soil to dry between waterings",
    "sunlight": "Low to bright, indirect light",
    "humidity": "Low to moderate",
    "greenhouse_id": "3"
  },
  {
    "name": "Pothos",
    "type": "Vine",
    "height": "Varies; can trail or climb",
    "water": "Low to moderate; let the top inch of soil dry before watering",
    "sunlight": "Low to bright, indirect light",
    "humidity": "Low to moderate",
    "greenhouse_id": "5"
  },
  {
    "name": "Aloe",
    "type": "Succulent",
    "height": "1 to 2 feet",
    "water": "Low; allow soil to dry between waterings",
    "sunlight": "Bright, indirect light",
    "humidity": "Low",
    "greenhouse_id": "2"
  },
  {
    "name": "Jade Plant",
    "type": "Succulent",
    "height": "Up to 3 feet",
    "water": "Low; allow soil to dry between waterings",
    "sunlight": "Bright, direct light",
    "humidity": "Low",
    "greenhouse_id": "2"
  },
  {
    "name": "Rubber Plant",
    "type": "Tree/Shrub",
    "height": "Up to 8 feet",
    "water": "Moderate; keep soil evenly moist",
    "sunlight": "Bright, indirect light",
    "humidity": "Moderate",
    "greenhouse_id": "1"
  },
  {
    "name": "Prayer Plant",
    "type": "Perennial",
    "height": "Up to 1 foot",
    "water": "Moderate; keep soil evenly moist",
    "sunlight": "Low to moderate, indirect light",
    "humidity": "High",
    "greenhouse_id": "3"
  },
  {
    "name": "Peace Lily",
    "type": "Perennial",
    "height": "1 to 4 feet",
    "water": "Moderate to high; keep soil consistently moist",
    "sunlight": "Low to moderate, indirect light",
    "humidity": "High",
    "greenhouse_id": "3"
  },
  {
    "name": "Gardenias",
    "type": "Shrub",
    "height": "2 to 6 feet",
    "water": "Moderate; keep soil consistently moist",
    "sunlight": "Bright, indirect light",
    "humidity": "High",
    "greenhouse_id": "4"
  },
  {
    "name": "Pilea (Chinese Money Plant)",
    "type": "Perennial",
    "height": "Up to 12 inches",
    "water": "Moderate; keep soil evenly moist",
    "sunlight": "Moderate, indirect light",
    "humidity": "Moderate",
    "greenhouse_id": "3"
  },
  {
    "name": "Croton",
    "type": "Shrub",
    "height": "Up to 6 feet",
    "water": "Moderate; keep soil evenly moist",
    "sunlight": "High, indirect light",
    "humidity": "Moderate to high",
    "greenhouse_id": "4"
  },
  {
    "name": "Money Tree",
    "type": "Tree",
    "height": "Up to 6 feet",
    "water": "Moderate; keep soil evenly moist",
    "sunlight": "Bright, indirect light",
    "humidity": "Moderate",
    "greenhouse_id": "1"
  },
  {
    "name": "Chinese Evergreen",
    "type": "Perennial",
    "height": "1 to 3 feet",
    "water": "Low to moderate; allow soil to dry between waterings",
    "sunlight": "Low to bright, indirect light",
    "humidity": "Low to moderate",
    "greenhouse_id": "3"
  },
  {
    "name": "Bird of Paradise",
    "type": "Perennial",
    "height": "5 to 7 feet indoors",
    "water": "Moderate; keep soil evenly moist",
    "sunlight": "High, indirect light",
    "humidity": "Moderate to high",
    "greenhouse_id": "3"
  },
  {
    "name": "Orchid",
    "type": "Epiphyte",
    "height": "Varies by species",
    "water": "Moderate; allow orchid mix to dry slightly between waterings",
    "sunlight": "Moderate, indirect light",
    "humidity": "High",
    "greenhouse_id": "6"
  },
  {
    "name": "African Violet",
    "type": "Perennial",
    "height": "6 to 12 inches",
    "water": "Moderate; keep soil consistently moist",
    "sunlight": "Moderate, indirect light",
    "humidity": "Moderate",
    "greenhouse_id": "3"
  },
  {
    "name": "Dieffenbachia (Dumb Cane)",
    "type": "Perennial",
    "height": "Up to 6 feet",
    "water": "Moderate; keep soil evenly moist",
    "sunlight": "Low to moderate, indirect light",
    "humidity": "Moderate to high",
    "greenhouse_id": "3"
  },
  {
    "name": "Bromeliad",
    "type": "Perennial",
    "height": "Varies by species",
    "water": "Moderate; keep the central cup filled with water",
    "sunlight": "Bright, indirect light",
    "humidity": "Moderate to high",
    "greenhouse_id": "3"
  },
  {
    "name": "Alocasia",
    "type": "Perennial",
    "height": "Varies by species",
    "water": "Moderate to high; keep soil consistently moist",
    "sunlight": "Bright, indirect light",
    "humidity": "High",
    "greenhouse_id": "3"
  },
  {
    "name": "Begonia",
    "type": "Perennial",
    "height": "Varies by species",
    "water": "Moderate; keep soil evenly moist",
    "sunlight": "Moderate, indirect light",
    "humidity": "Moderate",
    "greenhouse_id": "3"
  },
  {
    "name": "Calathea",
    "type": "Perennial",
    "height": "Varies by species",
    "water": "Moderate; keep soil consistently moist",
    "sunlight": "Low to moderate, indirect light",
    "humidity": "High",
    "greenhouse_id": "3"
  },
  {
    "name": "Crown of Thorns",
    "type": "Succulent",
    "height": "Up to 3 feet",
    "water": "Low to moderate; allow soil to dry between waterings",
    "sunlight": "High, direct light",
    "humidity": "Low",
    "greenhouse_id": "2"
  },
  {
    "name": "Hoya",
    "type": "Vine",
    "height": "Varies by species",
    "water": "Moderate; allow soil to dry between waterings",
    "sunlight": "Bright, indirect light",
    "humidity": "Moderate",
    "greenhouse_id": "5"
  },
  {
    "name": "Air Plant",
    "type": "Epiphyte",
    "height": "Varies; typically small",
    "water": "Soak in water every 1-2 weeks",
    "sunlight": "Indirect light",
    "humidity": "Moderate to high",
    "greenhouse_id": "6"
  },
  {
    "name": "Inch Plant (Tradescantia zebrina)",
    "type": "Perennial",
    "height": "Up to 12 inches",
    "water": "Moderate; keep soil evenly moist",
    "sunlight": "Bright, indirect light",
    "humidity": "Moderate",
    "greenhouse_id": "3"
  },

];

const seedPlants = () => Plant.bulkCreate(plantdata);

module.exports = seedPlants;
