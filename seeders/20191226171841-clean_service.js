'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('clean_service',[{
      clean_service_id: 1,
      service_name: 'ล้างรถ'
    },
    {
      clean_service_id: 2,
      service_name: 'ดูดฝุ่น'
    },
    {
      clean_service_id: 3,
      service_name: 'เคลือบเงา'
    }
  ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('clean_service')
  }
};
