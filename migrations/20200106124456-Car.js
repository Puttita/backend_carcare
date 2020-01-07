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
      },
      model: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      type_car_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'type_car'
          },
          key: "type_car_id"
        }
      },
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Car')
  }
};
