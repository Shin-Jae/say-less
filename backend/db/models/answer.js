'use strict';
module.exports = (sequelize, DataTypes) => {
  const Answer = sequelize.define('Answer', {
    userId: DataTypes.INTEGER,
    questionId: DataTypes.INTEGER,
    answer: DataTypes.STRING
  }, {});
  Answer.associate = function(models) {
    // associations can be defined here
  };
  return Answer;
};