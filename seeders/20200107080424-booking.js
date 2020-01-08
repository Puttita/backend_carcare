'use strict';
let moment = require('moment')
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('reservations', [{
      reserv_id: 1,
      customer_name: 'เจริญ บุญจอง',
      license: 'กข1234',
      total_price: 120,
      reserv_date: '2020-01-08',
      start_date: '09:00:00',
      end_date: '09:45:00',
      reserv_status: 0,
      employee_id: 4,
      car_wash_id: 1,
    },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('reservations')
  }
};
