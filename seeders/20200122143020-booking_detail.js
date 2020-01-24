'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('booking_detail', [{
      booking_detail_id: 1,
      total: 80,
      time_duration: '00:15:00',
      clean_service_id: 1,
      reserv_id: 1,
    },
    {
      booking_detail_id: 2,
      total: 50,
      time_duration: '00:15:00',
      clean_service_id: 2,
      reserv_id: 1,
    },
    {
      booking_detail_id: 3,
      total: 80,
      time_duration: '00:15:00',
      clean_service_id: 1,
      reserv_id: 2,
    },
    {
      booking_detail_id: 4,
      total: 50,
      time_duration: '00:15:00',
      clean_service_id: 2,
      reserv_id: 2,
    },
    {
      booking_detail_id: 5,
      total: 150,
      time_duration: '00:20:00',
      clean_service_id: 3,
      reserv_id: 2,
    },
    {
      booking_detail_id: 6,
      total: 80,
      time_duration: '00:15:00',
      clean_service_id: 1,
      reserv_id: 3,
    },
    {
      booking_detail_id: 7,
      total: 50,
      time_duration: '00:15:00',
      clean_service_id: 2,
      reserv_id: 3,
    },
    {
      booking_detail_id: 8,
      total: 150,
      time_duration: '00:20:00',
      clean_service_id: 3,
      reserv_id: 3,
    },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('booking_detail')
  }
};