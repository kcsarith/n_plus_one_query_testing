'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Owners', [{
        id: 1,
        first_name: 'Ian',
        last_name: 'Bentley',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        first_name: 'Ace',
        last_name: 'Geddis',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        first_name: 'The',
        last_name: 'Streets',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
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
