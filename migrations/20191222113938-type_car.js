'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('type_car', {
      type_car_id: {
        type: Sequelize.INTEGER,
        allowNul: false,
        primaryKey: true,
        autoIncrement: true
      },
      size: {
        type: Sequelize.STRING(45),
        allowNull: false,
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('type_car');
  }
};
