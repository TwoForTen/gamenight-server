'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Gamenight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Gamenight.hasMany(models.Participant, {
        foreignKey: 'gamenightId',
        as: 'participants',
        foreignKeyConstraint: true,
        onDelete: 'CASCADE',
        hooks: true,
      });
      Gamenight.hasMany(models.Chat, {
        foreignKey: 'gamenightId',
        as: 'chat',
        foreignKeyConstraint: true,
        onDelete: 'CASCADE',
        hooks: true,
      });
      Gamenight.hasOne(models.Place, {
        foreignKey: 'id',
        sourceKey: 'placeId',
        as: 'place',
      });
    }
  }
  Gamenight.init(
    {
      url: DataTypes.STRING,
      proposedBy: DataTypes.STRING,
      date: DataTypes.DATE,
      time: DataTypes.DATE,
      placeId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Gamenight',
    }
  );
  return Gamenight;
};
