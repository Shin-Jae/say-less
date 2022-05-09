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
        questionId: 1,
        answer: 'Definitely to be',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        questionId: 1,
        answer: 'Why not both',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        questionId: 2,
        answer: 'Basketball is my favorite sport, I like the way they dribble up and down the court',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 5,
        questionId: 2,
        answer: 'Im a Rachet ball guy myself',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        questionId: 8,
        answer: 'tetur adipiscing elit, sed do eiusmod temp',
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
