'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('car_wash', [{
      car_wash_id: 1,
      car_wash_name: 'ช่อง 1',
    },
    {
      car_wash_id: 2,
      car_wash_name: 'ช่อง 2',
    }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('car_wash')
  }
};
