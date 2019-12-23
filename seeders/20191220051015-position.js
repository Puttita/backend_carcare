'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('position', [{
      position_id: 1,
      position_role: 'admin',
      position_work: '',
    },
    {
      position_id: 2,
      position_role: 'manager',
      position_work: '',
    },
    {
      position_id: 3,
      position_role: 'cashier',
      position_work: '',
    },
    {
      position_id: 4,
      position_role: 'cleaner',
      position_work: 'ล้างรถ',
    },
    {
      position_id: 5,
      position_role: 'cleaner',
      position_work: 'ดูดฝุ่น',
    }])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('position')
  }
};
