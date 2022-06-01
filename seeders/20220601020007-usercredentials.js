'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('usercredentials', [{
      userid:1,
      platform:'flipkart',
      email:'sravani123@gmail.com',
      paswword:'sravani@123',
      createdAt: new Date(),
      updatedAt: new Date()
  },{
      userid:2,
      platform:'Ajio',
      email:'akshitha123@gmail.com',
      paswword:'akshitha@123',
      createdAt: new Date(),
      updatedAt: new Date()
  },{
      userid:3,
      platform:'Amazon',
      email:'anusha123@gmail.com',
      paswword:'anusha@123',
      createdAt: new Date(),
      updatedAt: new Date()
  }
]);
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('People', null, {});
    
  }
};
