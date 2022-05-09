'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Questions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        references: { model: "Users" },
        allowNull: false,
        type: Sequelize.INTEGER
      },
      question: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      description: {
        type: Sequelize.TEXT
      },
      image: {
        type: Sequelize.STRING(255)
      },
      topicId: {
        references: { model: "Topics" },
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Questions');
  }
};
