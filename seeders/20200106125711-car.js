'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Car', [{
      car_id: 1,
      brand: 'HONDA',
    },
    {
      car_id: 2,
      brand: 'TOYOTA',
    },
    {
      car_id: 3,
      brand: 'FORD',
    },
    {
      car_id: 4,
      brand: 'MAZDA',
    },
    {
      car_id: 5,
      brand: 'MITSUBISHI',
    },
    {
      car_id: 6,
      brand: 'NISSAN',
    },
    {
      car_id: 7,
      brand: 'AUDI',
    },
    {
      car_id: 8,
      brand: 'BENTLEY',
    },
    {
      car_id: 9,
      brand: 'BMW',
    },
    {
      car_id: 10,
      brand: 'CHEVROLET',
    }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Car')
  }
};
