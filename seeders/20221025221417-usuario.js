'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('users', [{
         name: 'Admin Box',
         avatar: null,
         nick: 'admin-box',
         password:'1234567',
         email:'admin@soyasesorias.com',
         status:'creado',
         roleId: 1
       }],{});

      await queryInterface.bulkInsert('perfiles', [{
        nombres: 'Admin',
        apellidos: 'Box',
        tipoDocumento: 'cc',
        documento:'000000',
        userId: 1
      }],{});

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
