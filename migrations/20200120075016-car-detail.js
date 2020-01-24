'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('car_detail', {
      car_detail_id: {
        type: Sequelize.INTEGER,
        allowNul: false,
        primaryKey: true,
        autoIncrement: true
      },
      model: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      car_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'Car'
          },
          key: "car_id"
        }
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
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('car_detail')
  }
};
