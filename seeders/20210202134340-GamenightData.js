'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const date = new Date();
    const data = [
      {
        url:
          'https://cf.geekdo-images.com/olBgdLF91bjxXrVrSzbYTA__opengraph/img/CUQzv5WTS6ukUQOpziUk0NkLrpI=/fit-in/1200x630/filters:strip_icc()/pic5509936.jpg',
        proposedBy: 'Roly',
        date: date,
        time: date,
        placeId: 2,
        createdAt: date,
        updatedAt: date,
      },
      {
        url:
          'https://cf.geekdo-images.com/olBgdLF91bjxXrVrSzbYTA__opengraph/img/CUQzv5WTS6ukUQOpziUk0NkLrpI=/fit-in/1200x630/filters:strip_icc()/pic5509936.jpg',
        proposedBy: 'Neko drugi',
        date: date,
        time: date,
        placeId: 1,
        createdAt: date,
        updatedAt: date,
      },
    ];

    await queryInterface.bulkInsert('Gamenights', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Gamenights', null, {});
  },
};
