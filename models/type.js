'use strict';
module.exports = (sequelize, DataTypes) => {
  const type = sequelize.define('type', {
    query: DataTypes.STRING,
    title: DataTypes.STRING
  }, {});
  type.associate = function(models) {
    // associations can be defined here
    models.type.belongsTo(models.session);
  };
  return type;
};