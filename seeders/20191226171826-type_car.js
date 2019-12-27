'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('type_car', [{
      type_car_id: 1,
      size: 's',
      brand: 'Honda',
      model: 'CITY'
    },
    {
      type_car_id: 2,
      size: 's',
      brand: 'Honda',
      model: 'JAZZ'
    },
    {
      type_car_id: 3,
      size: 's',
      brand: 'Honda',
      model: 'BRIO'
    },
    {
      type_car_id: 4,
      size: 'm',
      brand: 'Honda',
      model: 'CIVIC'
    },
    {
      type_car_id: 5,
      size: 'l',
      brand: 'Honda',
      model: 'ACCORD'
    }
  ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('type_car')
  }
};
