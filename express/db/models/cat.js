'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cat = sequelize.define('Cat', {
    name: DataTypes.STRING,
    owner_id: DataTypes.INTEGER,
    breed: DataTypes.STRING,
    color: DataTypes.STRING
  }, {});
  Cat.associate = function(models) {
    Cat.belongsTo(models.Owner, {foreignKey: 'owner_id' });
    Cat.hasMany(models.Toy, {foreignKey: 'cat_id'});
  };
  return Cat;
};
