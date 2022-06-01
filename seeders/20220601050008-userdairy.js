'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('userdairy', [{
     userid:2,
     description:"I like the day",
     createAt:new Date(),
     updateAt:new Date()
  },{
    userid:1,
    description:"I love the day",
    createAt:new Date(),
    updateAt:new Date()
  }
]);
  },

  async down (queryInterface, Sequelize) {
  await queryInterface.bulkDelete('userdairy', null, {});
    
  }
};
