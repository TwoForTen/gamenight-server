'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Game.belongsToMany(models.Genre, {
        through: models.GameGenre,
        foreignKey: 'gameId',
        constraints: false,
        as: 'genres',
      });
      Game.belongsToMany(models.Participant, {
        through: models.ParticipantGame,
        foreignKey: 'gameId',
        constraints: false,
        as: 'games',
      });
    }
  }
  Game.init(
    {
      name: DataTypes.STRING,
      minPlayers: DataTypes.SMALLINT,
      maxPlayers: DataTypes.SMALLINT,
      owner: DataTypes.STRING,
      description: DataTypes.TEXT,
      url: DataTypes.STRING,
      playtime: DataTypes.STRING,
      howToPlay: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Game',
    }
  );
  return Game;
};
