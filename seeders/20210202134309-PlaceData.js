'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const date = new Date();
    const data = [
      {
        name: 'Rolys',
        address: 'Vilima Korajca 4',
        createdAt: date,
        updatedAt: date,
      },
      {
        name: 'Docs',
        address: 'Gajnice 18',
        createdAt: date,
        updatedAt: date,
      },
    ];

    await queryInterface.bulkInsert('Places', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Places', null, {});
  },
};
