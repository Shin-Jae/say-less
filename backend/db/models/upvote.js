'use strict';
module.exports = (sequelize, DataTypes) => {
  const Upvote = sequelize.define('Upvotes', {
    questionId: DataTypes.INTEGER,
    answerId: DataTypes.INTEGER,
    commentId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Upvote.associate = function (models) {
    // associations can be defined here
  };
  return Upvote;
};
