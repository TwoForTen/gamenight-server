const express = require('express');
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
const db = require('./models');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Routes
const gameRoutes = require('./routes/games');
app.use('/api', gameRoutes);

const placeRoutes = require('./routes/places');
app.use('/api', placeRoutes);

const gamenightRoutes = require('./routes/gamenights');
app.use('/api', gamenightRoutes);

db.sequelize.sync().then(() => {
  app.listen(port, () => console.log(`server running at port ${port}`));
});
