'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Car', [{
      type_car_id: 1,
      brand: 'Honda',
      model: 'CITY',
      type_car_id: 1
    },
    {
      type_car_id: 2,
      brand: 'Honda',
      model: 'JAZZ',
      type_car_id: 1
    },
    {
      type_car_id: 3,
      brand: 'Honda',
      model: 'BRIO',
      type_car_id: 1
    },
    {
      type_car_id: 4,
      brand: 'Honda',
      model: 'CIVIC',
      type_car_id: 2
    },
    {
      type_car_id: 5,
      brand: 'Honda',
      model: 'ACCORD',
      type_car_id: 3
    }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Car')
  }
};
