'use strict';
module.exports = (sequelize, DataTypes) => {
  const Toy = sequelize.define('Toy', {
    name: DataTypes.STRING,
    toy_type_id: DataTypes.INTEGER,
    cat_id: DataTypes.INTEGER
  }, {});
  Toy.associate = function(models) {
    Toy.belongsTo(models.Cat, {foreignKey: 'cat_id' });
    Toy.belongsTo(models.ToyType, {foreignKey: 'toy_type_id' });
  };
  return Toy;
};
