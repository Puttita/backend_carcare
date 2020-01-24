'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Car', {
      car_id: {
        type: Sequelize.INTEGER,
        allowNul: false,
        primaryKey: true,
        autoIncrement: true
      },
      brand: {
        type: Sequelize.STRING(255),
        allowNull: false,
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Car')
  }
};
