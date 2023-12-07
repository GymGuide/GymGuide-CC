'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     *Example:
     */ 
    await queryInterface.bulkInsert('Equipment', [
      {
        name: 'abdominal-machine',
        description: ''
      },
      {
        name: 'arm-curl',
        description: ''
      },
      {
        name: 'arm-extension',
        description: ''
      },
      {
        name: 'back-extension',
        description: ''
      },
      {
        name: 'back-row-machine',
        escription: ''
      },
      {
        name: 'bench-press',
        description: ''
      },
      {
        name: 'cable-lat-pulldown',
        description: ''
      },
    ], {});

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
