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
        question: "What is the best sport and why?",
        description: "testing",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.fzWxMpXp4WGHAYCs-gY_IwHaE7%26pid%3DApi&f=1",
        topicId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        question: "What is life?",
        description: null,
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.uEwEDOXZ6XYW3GEmUugpUgHaIv%26pid%3DApi&f=1",
        topicId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        question: "To be or not to be?",
        description: null,
        image: null,
        topicId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        question: "Test 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus in mollis nunc sed id semper risus in hendrerit. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt. A diam maecenas sed enim ut sem. Neque laoreet suspendisse interdum consectetur libero. Habitant morbi tristique senectus et. Venenatis a condimentum vitae sapien pellentesque. Sed viverra tellus in hac. Gravida dictum fusce ut placerat orci nulla pellentesque. Consequat nisl vel pretium lectus quam id leo in vitae. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Faucibus turpis in eu mi bibendum. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu. Pretium lectus quam id leo in vitae turpis massa sed. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan. Varius vel pharetra vel turpis nunc eget lorem dolor.",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.GGAs1O-ZmfBJGBCDcj0KpgHaDd%26pid%3DApi&f=1",
        topicId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        question: "hello",
        description: "world",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.t1al8RWKVZnv84czFJmQyQHaFj%26pid%3DApi&f=1",
        topicId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        question: "yoyo",
        description: "Convallis a cras semper auctor neque. Mollis nunc sed id semper risus. Nisl purus in mollis nunc sed id semper risus in. Nunc consequat interdum varius sit amet. Pellentesque id nibh tortor id aliquet lectus proin. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Tortor vitae purus faucibus ornare. Vivamus at augue eget arcu dictum varius. Faucibus turpis in eu mi. Tellus in hac habitasse platea dictumst vestibulum rhoncus. Viverra orci sagittis eu volutpat odio facilisis mauris sit. Metus vulputate eu scelerisque felis imperdiet. Scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis. Facilisi etiam dignissim diam quis. Nisl vel pretium lectus quam. Sit amet nisl purus in mollis nunc sed.",
        image: "https://www.northeastern.edu/graduate/blog/wp-content/uploads/2019/09/What-is-a-Graduate-Degree.png",
        topicId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        question: "answer test",
        description: "testesttest",
        image: null,
        topicId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        question: "testanswer",
        description: "description",
        image: null,
        topicId: 4,
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
