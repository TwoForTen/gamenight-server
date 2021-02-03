const express = require('express');
const router = express.Router();

const {
  Game,
  Genre,
  Gamenight,
  Participant,
  Chat,
  Place,
} = require('../models');

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

router.get('/gamenights', async (req, res) => {
  try {
    const gamenights = await Gamenight.findAll({
      include: [
        {
          model: Participant,
          include: [{ model: Game, as: 'games' }],
          as: 'participants',
        },
        {
          model: Place,
          as: 'place',
        },
        {
          model: Chat,
          as: 'chat',
        },
      ],
    });
    res.json(gamenights);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
