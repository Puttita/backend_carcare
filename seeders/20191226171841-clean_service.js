'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('clean_service', [{
      clean_service_id: 1,
      service_name: 'ล้างรถ',
      service_price: 80,
      service_duration: '00:15:00',
      type_car_id: 1
    },
    {
      clean_service_id: 2,
      service_name: 'ดูดฝุ่น',
      service_price: 50,
      service_duration: '00:15:00',
      type_car_id: 1
    },
    {
      clean_service_id: 3,
      service_name: 'เคลือบเงา',
      service_price: 150,
      service_duration: '00:20:00',
      type_car_id: 1
    }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('clean_service')
  }
};
