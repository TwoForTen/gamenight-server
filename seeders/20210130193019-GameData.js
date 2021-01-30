'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const date = new Date();

    const data = {
      name: 'Mysterium',
      minPlayers: 2,
      maxPlayers: 7,
      owner: 'Roly',
      description: 'Quick description for now',
      url:
        'https://d1rw89lz12ur5s.cloudfront.net/photo/cartamagica/file/1d26f120bdae11e7bbd5f17fd37f843e/cover.jpg',
      playtime: '60 - 120 min',
      howToPlay:
        'https://www.youtube.com/watch?v=Bw2Xz9wp4KI&ab_channel=ShutUp%26SitDown',
      createdAt: date,
      updatedAt: date,
    };

    await queryInterface.bulkInsert('Games', [data], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Games', null, {});
  },
};
