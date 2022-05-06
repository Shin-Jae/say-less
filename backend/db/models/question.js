'use strict';
module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    userId: DataTypes.INTEGER,
    question: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  Question.associate = function (models) {
    // associations can be defined here
    Question.belongsTo(models.User, { foreignKey: "userId" });
    Question.hasMany(models.Answer, { foreignKey: "questionId" });
  };
  return Question;
};
