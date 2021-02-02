'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const date = new Date();
    const data = [
      {
        username: 'ColdCoffin',
        createdAt: date,
        updatedAt: date,
        gamenightId: 1,
      },
      {
        username: 'TwoForTen',
        createdAt: date,
        updatedAt: date,
        gamenightId: 2,
      },
      {
        username: 'i_perica',
        createdAt: date,
        updatedAt: date,
        gamenightId: 1,
      },
    ];

    await queryInterface.bulkInsert('Participants', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Participants', null, {});
  },
};
