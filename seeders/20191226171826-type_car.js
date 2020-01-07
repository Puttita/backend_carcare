'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('type_car', [{
      type_car_id: 1,
      size: 'S'
    },
    {
      type_car_id: 2,
      size: 'M',
    },
    {
      type_car_id: 3,
      size: 'L',
    },
    {
      type_car_id: 4,
      size: 'XL',
    },
    {
      type_car_id: 5,
      size: 'Van',
    },
    {
      type_car_id: 6,
      size: 'Motorcycle',
    },
    {
      type_car_id: 7,
      size: 'Bigbike',
    }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('type_car')
  }
};
