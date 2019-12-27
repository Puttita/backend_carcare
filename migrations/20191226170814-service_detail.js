'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('service_detail', {
      service_detail_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      service_price: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      service_duration: {
        type: Sequelize.DATE,
        allowNull: false
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
      clean_service_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'clean_service'
          },
          key: "clean_service_id"
        }
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('service_detail');
  }
};
