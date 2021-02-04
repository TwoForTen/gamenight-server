'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const date = new Date();

    const data = [
      {
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
      },
      {
        name: 'Undaunted: Normandy',
        minPlayers: 1,
        maxPlayers: 2,
        owner: 'Roly',
        description:
          'Undaunted: Normandy is a deck-building game that places you and your opponent in command of American or German forces, fighting through a series of missions critical to the outcome of World War II. Use your cards to seize the initiative, bolster your forces, or control your troops on the battlefield. Strong leadership can turn the tide of battle in your favor, but reckless decisions could prove catastrophic as every casualty you take removes a card from your deck. Take charge amidst the chaos of battle, hold fast in the face of opposition, and remain undaunted.',
        url:
          'https://cf.geekdo-images.com/iCd6hMGDzsQ_UXh00iKsJA__opengraph/img/e1lzbItZXIfy_YS5vsNWzWy36_w=/fit-in/1200x630/filters:strip_icc()/pic4602347.jpg',
        playtime: '45 - 60 min',
        howToPlay:
          'https://www.youtube.com/watch?v=xxnWi8SVRfI&ab_channel=WatchItPlayed',
        createdAt: date,
        updatedAt: date,
      },
    ];

    await queryInterface.bulkInsert('Games', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Games', null, {});
  },
};
