'use strict';
module.exports = (sequelize, DataTypes) => {
  const ToyType = sequelize.define('ToyType', {
    name: DataTypes.STRING
  }, {});
  ToyType.associate = function(models) {
    ToyType.hasMany(models.Toy, {foreignKey: 'toy_type_id' });
  };
  return ToyType;
};
