'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'ParticipantGames',
      [
        {
          participantId: 1,
          gameId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          participantId: 1,
          gameId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          participantId: 3,
          gameId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ParticipantGames', null, {});
  },
};
