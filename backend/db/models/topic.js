'use strict';
module.exports = (sequelize, DataTypes) => {
  const Topic = sequelize.define('Topic', {
    category: DataTypes.STRING,
    questionId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Topic.associate = function(models) {
    // associations can be defined here
  };
  return Topic;
};