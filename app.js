const express = require('express');
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
const db = require('./models');
const { Game, Genre } = require('./models');
const Sequelize = require('sequelize');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

db.sequelize.sync().then(() => {
  app.listen(port, () => console.log(`server running at port ${port}`));
});

app.get('/', async (req, res) => {
  const games = await Game.findAll({
    include: [
      {
        model: Genre,
        as: 'genres',
      },
    ],
  });
  res.json(games);
});
