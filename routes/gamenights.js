const express = require('express');
const router = express.Router();

const {
  Game,
  Genre,
  Gamenight,
  Participant,
  Chat,
  Place,
  ParticipantGame,
} = require('../models');

router.get('/gamenights', async (req, res) => {
  try {
    const gamenights = await Gamenight.findAll({
      include: [
        {
          model: Participant,
          include: [
            {
              model: Game,
              as: 'games',
              include: [{ model: Genre, as: 'genres' }],
            },
          ],
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

router.post('/gamenight', async (req, res) => {
  const { url, proposedBy, date, time, placeId, games } = req.body;

  try {
    const gamenight = await Gamenight.create({
      url,
      proposedBy,
      date,
      time,
      placeId,
    });
    const participant = await Participant.create({
      username: proposedBy,
      gamenightId: gamenight.id,
    });
    games.forEach(async (game) => {
      await ParticipantGame.create({
        participantId: participant.id,
        gameId: game.id,
      });
    });
    res.sendStatus(200);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.delete('/gamenight/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Gamenight.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(200);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
