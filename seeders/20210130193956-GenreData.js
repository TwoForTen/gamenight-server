'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const date = new Date();
    const data = [
      {
        name: 'Adventure',
        createdAt: date,
        updatedAt: date,
      },
      {
        name: 'Mystery',
        createdAt: date,
        updatedAt: date,
      },
    ];
    await queryInterface.bulkInsert('Genres', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Genres', null, {});
  },
};
