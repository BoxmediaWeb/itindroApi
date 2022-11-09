'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('role_modulos', [
      {
        roleId: 1,
        moduloId: 1
      },
      {
        roleId: 1,
        moduloId: 9
      },
      {
        roleId: 1,
        moduloId: 10
      }
  ],{});


  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
