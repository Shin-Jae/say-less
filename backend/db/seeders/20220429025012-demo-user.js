'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password'),
        image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fbf%2Fa5%2F3b%2Fbfa53b2488eb224410ac1edfbecb2a34.png&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fjaywms22%2Fgoku-profile-pic%2F&tbnid=uFTa5mMyVTNVsM&vet=12ahUKEwi4kKGWiNH3AhWarXIEHc-kBdkQMygAegUIARDZAQ..i&docid=kbKyPESg0aO3jM&w=2048&h=2048&q=goku%20profile%20picture&hl=en&ved=2ahUKEwi4kKGWiNH3AhWarXIEHc-kBdkQMygAegUIARDZAQ",
      },
      {
        email: 'user1@user.io',
        username: 'FakeUser1',
        hashedPassword: bcrypt.hashSync('password2'),
        image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn3.iconfinder.com%2Fdata%2Ficons%2Funiversal-set-for-web-and-mobile%2F16%2FInterface_icons_user_avatar_profile-512.png&imgrefurl=https%3A%2F%2Fwww.iconfinder.com%2Ficons%2F675840%2Favatar_profile_user_account_customer_man_person_icon&tbnid=j0SU07USLZeCEM&vet=12ahUKEwjq4rOvh9H3AhWqsHIEHav6A3gQMygDegUIARDMAQ..i&docid=6ASFnCpnFK5SUM&w=512&h=512&q=demo%20profile%20picture&hl=en&ved=2ahUKEwjq4rOvh9H3AhWqsHIEHav6A3gQMygDegUIARDMAQ",
      },
      {
        email: 'user2@user.io',
        username: 'FakeUser2',
        hashedPassword: bcrypt.hashSync('password3'),
        image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.biography.com%2F.image%2Far_1%3A1%252Cc_fill%252Ccs_srgb%252Cfl_progressive%252Cq_auto%3Agood%252Cw_1200%2FMTc5NjIyODM0ODM2ODc0Mzc3%2Fdwayne-the-rock-johnson-gettyimages-1061959920.jpg&imgrefurl=https%3A%2F%2Fwww.biography.com%2Fnews%2Fdwayne-johnson-the-rock-facts&tbnid=nlY4bs8bbAsEKM&vet=12ahUKEwiy0IzoiNH3AhXfGVkFHXe0DkcQMygEegUIARDMAQ..i&docid=-_SVAyQJq3fgiM&w=1200&h=1200&q=dwyane%20the%20rock&hl=en&ved=2ahUKEwiy0IzoiNH3AhXfGVkFHXe0DkcQMygEegUIARDMAQ",
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
