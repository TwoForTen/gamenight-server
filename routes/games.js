const express = require('express');
const router = express.Router();

const { Game, Genre } = require('../models');

router.get('/games', async (req, res) => {
  try {
    const games = await Game.findAll({
      include: [
        {
          model: Genre,
          as: 'genres',
        },
      ],
    });
    res.json(games);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
