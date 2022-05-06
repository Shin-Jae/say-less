'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Answers', [
      {
        userId: 1,
        questionId: 5,
        answer: 'testing Answer',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        questionId: 5,
        answer: 'testAnswer',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        questionId: 6,
        answer: 'drerertw',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        questionId: 8,
        answer: 'mnccmbvbmv',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        questionId: 8,
        answer: 'yiuoyyuiy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        questionId: 1,
        answer: 'kkllk kl;jkj ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        questionId: 1,
        answer: 'efdaf fafef fasdf',
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
    return queryInterface.bulkDelete('Answers', null, {});
  }
};
