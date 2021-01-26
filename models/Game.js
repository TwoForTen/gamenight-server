const DataTypes = require('sequelize').DataTypes;
const db = require('../config/database');

const Game = db.define('Game', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  minPlayers: {
    type: DataTypes.SMALLINT,
  },
  maxPlayers: {
    type: DataTypes.SMALLINT,
  },
  owner: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  playtime: {
    type: DataTypes.STRING,
  },
  howToPlay: {
    type: DataTypes.STRING,
  },
});
