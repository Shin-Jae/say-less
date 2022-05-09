'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Topics', [
      {
        topic: "Anything",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        topic: "Sports",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        topic: "Movies",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        topic: "Family",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        topic: "Business",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        topic: "Science",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        topic: "Technology",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        topic: "Finance",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        topic: "Health",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Topics', null, {});
  }
};
