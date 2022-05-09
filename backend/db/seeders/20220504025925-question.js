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
        image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.istockphoto.com%2Fphotos%2Fvarious-sport-equipments-on-grass-picture-id949190756%3Fk%3D20%26m%3D949190756%26s%3D612x612%26w%3D0%26h%3D9loU1wPMKi9eK89EDxBfz4AarpAl8BFo1iO5XGHpXX0%3D&imgrefurl=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fsports&tbnid=l5PZrM6DqsIrfM&vet=12ahUKEwiau6aGhdH3AhWIknIEHZPqBtQQMygHegUIARDnAQ..i&docid=5GbA12L42IOfyM&w=612&h=337&q=sports&ved=2ahUKEwiau6aGhdH3AhWIknIEHZPqBtQQMygHegUIARDnAQ",
        topicId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        question: "What is life?",
        description: null,
        image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.theedadvocate.org%2Fwp-content%2Fuploads%2F2016%2F02%2Fboard-361516_960_720.jpg&imgrefurl=https%3A%2F%2Fwww.theedadvocate.org%2Feliminating-tests-through-continual-assessment%2F&tbnid=TztvIrebAb-XPM&vet=12ahUKEwi4vIXuhNH3AhXGsHIEHdGNBzIQMygBegUIARDZAQ..i&docid=OFVtdbjq8toeEM&w=950&h=720&q=Test&ved=2ahUKEwi4vIXuhNH3AhXGsHIEHdGNBzIQMygBegUIARDZAQ",
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
        image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2018%2F01%2F14%2F23%2F12%2Fnature-3082832__340.jpg&imgrefurl=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fnature%2F&tbnid=g4T6YsQQG26nmM&vet=12ahUKEwjrtZbHhtH3AhX2r3IEHanFDckQMygAegUIARCXAQ..i&docid=Ba_eiczVaD9-zM&w=604&h=340&q=hd%20picture&ved=2ahUKEwjrtZbHhtH3AhX2r3IEHanFDckQMygAegUIARCXAQ",
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
