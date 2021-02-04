'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const date = new Date();
    const data = [
      {
        username: 'ColdCoffin',
        gamenightId: 1,
        createdAt: date,
        updatedAt: date,
      },
      {
        username: 'TwoForTen',
        gamenightId: 2,
        createdAt: date,
        updatedAt: date,
      },
      {
        username: 'i_perica',
        gamenightId: 1,
        createdAt: date,
        updatedAt: date,
      },
    ];

    await queryInterface.bulkInsert('Participants', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Participants', null, {});
  },
};
