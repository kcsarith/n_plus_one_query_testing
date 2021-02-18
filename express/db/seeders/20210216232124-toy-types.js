'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('ToyTypes', [{
          id: 1,
          name: 'String',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          name: 'Ball',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 3,
          name: 'Mouse',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 4,
          name: 'Feather',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 5,
          name: 'Lazer',
          createdAt: new Date(),
          updatedAt: new Date()
        }
        ], {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
