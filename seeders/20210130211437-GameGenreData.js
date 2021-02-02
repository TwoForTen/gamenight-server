'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'GameGenres',
      [
        {
          gameId: 1,
          genreId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          gameId: 1,
          genreId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('GameGenres', null, {});
  },
};
