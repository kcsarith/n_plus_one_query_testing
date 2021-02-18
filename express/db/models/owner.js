'use strict';
module.exports = (sequelize, DataTypes) => {
  const Owner = sequelize.define('Owner', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING
  }, {});
  Owner.associate = function(models) {
    Owner.hasMany(models.Cat, {foreignKey: 'owner_id' });
  };
  return Owner;
};
