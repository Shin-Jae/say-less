'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Questions', [
      {
        userId: 1,
        question: "Test 1",
        description: "testing",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        question: "Test 2",
        description: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        question: "To be or not to be?",
        description: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        question: "Test 1",
        description: "testing",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        question: "hello",
        description: "world",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        question: "yoyo",
        description: "hihi",
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
    return queryInterface.bulkDelete('Questions', null, {});
  }
};
