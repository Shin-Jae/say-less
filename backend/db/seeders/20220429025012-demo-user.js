'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password'),
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.E6QRB2ze45CFytl9ohXZvgHaHa%26pid%3DApi&f=1",
      },
      {
        email: 'user1@user.io',
        username: 'FakeUser1',
        hashedPassword: bcrypt.hashSync('password2'),
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.0A1RSeVHV4YfoDGR2jUvHwHaHa%26pid%3DApi&f=1",
      },
      {
        email: 'user2@user.io',
        username: 'JoeSmoe',
        hashedPassword: bcrypt.hashSync('password3'),
        image: "https://thumbs.dreamstime.com/b/faceless-businessman-avatar-man-suit-blue-tie-human-profile-userpic-face-features-web-picture-gentlemen-85824471.jpg",
      },
      {
        email: 'user3@user.io',
        username: 'BillTheGuy',
        hashedPassword: bcrypt.hashSync('password3'),
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.zs9g3emlEhLN16b1z5_CzwHaHa%26pid%3DApi&f=1",
      },
      {
        email: 'user4@user.io',
        username: 'Karen123',
        hashedPassword: bcrypt.hashSync('password3'),
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.PqBYGErQeWQWhbA_VeUBDQHaHa%26pid%3DApi&f=1",
      }
      , {
        email: 'user5@user.io',
        username: 'Chucky',
        hashedPassword: bcrypt.hashSync('password3'),
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.OxiqvM22plgyUpyyxytsrgHaHa%26pid%3DApi&f=1",
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
