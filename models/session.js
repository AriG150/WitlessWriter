'use strict';
module.exports = (sequelize, DataTypes) => {
  const session = sequelize.define('session', {
    name: DataTypes.STRING,
    text: DataTypes.TEXT,
    prompt: DataTypes.STRING
  }, {});
  session.associate = function(models) {
    // associations can be defined here
  };
  return session;
};