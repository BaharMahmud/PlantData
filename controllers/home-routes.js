const router = require('express').Router();
const { Greenhouse, Plant } = require('../models');

// GET all greenhouses for homepage
router.get('/', async (req, res) => {
  try {
    const dbGreenhouseData = await Greenhouse.findAll({
      include: [
        {
          model: Plant,
          attributes: ['name', 'type'],
        },
      ],
    });

    const greenhouses = dbGreenhouseData.map((greenhouse) =>
    greenhouse.get({ plain: true })
    );

    res.render('homepage', {
      greenhouses,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one greenhouse
router.get('/greenhouse/:id', async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    // If the user is logged in, allow them to view the gallery
    try {
      const dbGreenhouseData = await Greenhouse.findByPk(req.params.id, {
        include: [
          {
            model: Plant,
            attributes: [
              'id',
              'name',
              'type',
              'height',
              'sunlight',
              'water',
              'humidity',
            ],
          },
        ],
      });
      const greenhouse = dbGreenhouseData.get({ plain: true });
      res.render('greenhouse', { greenhouse, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});

// GET one painting
router.get('/plant/:id', async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    // If the user is logged in, allow them to view the painting
    try {
      const dbPlantData = await Plant.findByPk(req.params.id);

      const plant = dbPlantData.get({ plain: true });

      res.render('plant', { plant, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
