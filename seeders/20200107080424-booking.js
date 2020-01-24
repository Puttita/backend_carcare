'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('reservations', [{
      reserv_id: 1,
      customer_name: 'เจริญ บุญจอง',
      license: 'กข1234',
      total_price: 130,
      reserv_date: '2020-01-13',
      start_date: '09:00:00',
      end_date: '09:30:00',
      reserv_status: 0,
      employee_id: 4,
      car_wash_id: 1,
    },
    {
      reserv_id: 2,
      customer_name: 'พุทธิตา จันทร์กลม',
      license: 'กก9999',
      total_price: 280,
      reserv_date: '2020-01-13',
      start_date: '09:00:00',
      end_date: '09:55:00',
      reserv_status: 0,
      employee_id: 4,
      car_wash_id: 2,
    },
    {
      reserv_id: 3,
      customer_name: 'สุริยกานต์ สุขีพันธ์',
      license: '3กฮ 3086',
      total_price: 280,
      reserv_date: '2020-01-13',
      start_date: '09:45:00',
      end_date: '10:40:00',
      reserv_status: 0,
      employee_id: 4,
      car_wash_id: 2,
    },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('reservations')
  }
};
