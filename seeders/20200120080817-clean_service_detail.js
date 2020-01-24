'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('clean_service_detail', [{
      clean_service_detail_id: 1,
      service_price: 80,
      service_duration: '00:15:00',
      clean_service_id: 1,
      type_car_id: 1
    },
    {
      clean_service_detail_id: 2,
      service_price: 100,
      service_duration: '00:20:00',
      clean_service_id: 1,
      type_car_id: 2
    },
    {
      clean_service_detail_id: 3,
      service_price: 120,
      service_duration: '00:20:00',
      clean_service_id: 1,
      type_car_id: 3
    },
    {
      clean_service_detail_id: 4,
      service_price: 150,
      service_duration: '00:25:00',
      clean_service_id: 1,
      type_car_id: 4
    },
    {
      clean_service_detail_id: 5,
      service_price: 200,
      service_duration: '00:30:00',
      clean_service_id: 1,
      type_car_id: 5
    },
    {
      clean_service_detail_id: 6,
      service_price: 80,
      service_duration: '00:15:00',
      clean_service_id: 1,
      type_car_id: 6
    },
    {
      clean_service_detail_id: 7,
      service_price: 100,
      service_duration: '00:20:00',
      clean_service_id: 1,
      type_car_id: 7
    }
  ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('clean_Service_detail')
  }
};
