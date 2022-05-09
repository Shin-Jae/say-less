'use strict';
module.exports = (sequelize, DataTypes) => {
  const Topic = sequelize.define('Topic', {
    topic: DataTypes.STRING,
    // questionId: DataTypes.INTEGER,
    // userId: DataTypes.INTEGER
  }, {});
  Topic.associate = function (models) {
    // associations can be defined here
    Topic.hasMany(models.Question, { foreignKey: "topicId" });
  };
  return Topic;
};
