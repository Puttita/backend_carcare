'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('car_detail', [{
      car_detail_id: 1,
      model: 'CITY',
      car_id: 1,
      type_car_id: 1
    },
    {
      car_detail_id: 2,
      model: 'JAZZ',
      car_id: 1,
      type_car_id: 1
    },
    {
      car_detail_id: 3,
      model: 'CIVIC',
      car_id: 1,
      type_car_id: 2
    },
    {
      car_detail_id: 4,
      model: 'ACCORD',
      car_id: 1,
      type_car_id: 3
    },
    {
      car_detail_id: 5,
      model: 'CRV',
      car_id: 1,
      type_car_id: 4
    },
    {
      car_detail_id: 6,
      model: 'HRV',
      car_id: 1,
      type_car_id: 2
    },
    {
      car_detail_id: 7,
      model: 'YARIS',
      car_id: 2,
      type_car_id: 1
    },
    {
      car_detail_id: 8,
      model: 'ALTIS',
      car_id: 2,
      type_car_id: 2
    },
    {
      car_detail_id: 9,
      model: 'CAMRY',
      car_id: 2,
      type_car_id: 3
    },
    {
      car_detail_id: 10,
      model: 'FIESTA',
      car_id: 3,
      type_car_id: 1
    },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('car_detail')
  }
};
