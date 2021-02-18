'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Cats', [{
          id: 1,
          name: 'Scampi',
          owner_id: 1,
          breed: 'Brown Tabby',
          color: 'brown, grey, black, white',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          name: 'Graystoke',
          owner_id: 1,
          breed: 'Grey Tabby',
          color: 'grey, black, white',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 3,
          name: 'Scout',
          owner_id: 2,
          breed: 'American Shorhair',
          color: 'tuxedo',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 4,
          name: 'James Dean',
          owner_id: 3,
          breed: 'Manx',
          color: 'tortoise shell',
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
