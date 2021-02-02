'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const date = new Date();
    const data = [
      {
        message:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non perferendis pariatur vero placeat ipsum modi tempore, quae aut facilis adipisci!',
        gamenightId: 1,
        createdAt: date,
        updatedAt: date,
      },
      {
        message: 'U redu.',
        gamenightId: 1,
        createdAt: date,
        updatedAt: date,
      },
      {
        message:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non perferendis pariatur vero placeat ipsum modi tempore',
        gamenightId: 1,
        createdAt: date,
        updatedAt: date,
      },
    ];

    await queryInterface.bulkInsert('Chats', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Chats', null, {});
  },
};
