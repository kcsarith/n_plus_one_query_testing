'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Toys', [{
          id: 1,
          name: 'Yellow String',
          cat_id: 1,
          toy_type_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          cat_id: 1,
          name: 'Blue String',
          toy_type_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 3,
          cat_id: 1,
          name: 'Shiney Ball',
          toy_type_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 4,
          cat_id: 1,
          name: 'Death Lazer',
          toy_type_id: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 5,
          cat_id: 2,
          name: 'Fake Mouse',
          toy_type_id: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 6,
          cat_id: 2,
          name: 'Blue ball',
          toy_type_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 7,
          cat_id: 3,
          name: 'Feather',
          toy_type_id: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 8,
          cat_id: 3,
          name: 'Spinning Auto Lazer Machine',
          toy_type_id: 5,
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
