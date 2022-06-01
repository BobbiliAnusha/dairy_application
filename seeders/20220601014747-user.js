'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('users', [{
     name: 'Sravani',
     age:23,
     mobile:9675765645,
     email:'sravani123@gmail.com',
     paswword:'sravani@123',
     creatwAt:new Date(),
     updatedAt:new Date()
     
  },{
    name: 'Akshitha',
    age:22,
    mobile:9897967651,
    email:'akshitha123@gmail.com',
    paswword:'akshitha@123',
    creatwAt:new Date(),
    updatedAt:new Date()
  }
]);
  },
  async down (queryInterface, Sequelize) {
  await queryInterface.bulkDelete('users', null, {});
    
  }
};
