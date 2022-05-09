'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password'),
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.fzWxMpXp4WGHAYCs-gY_IwHaE7%26pid%3DApi&f=1",
      },
      {
        email: 'user1@user.io',
        username: 'FakeUser1',
        hashedPassword: bcrypt.hashSync('password2'),
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.qZUVrRTeFTSRjHRfUmvBHwHaDt%26pid%3DApi&f=1",
      },
      {
        email: 'user2@user.io',
        username: 'FakeUser2',
        hashedPassword: bcrypt.hashSync('password3'),
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.ln9vsWYppO2GbHv1vl5BYQHaDt%26pid%3DApi&f=1",
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};
