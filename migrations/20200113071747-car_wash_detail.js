'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("car_wash_detail", {
      car_wash_detail_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      employee_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: {
            tableName: 'employee'
          },
          key: "employee_id"
        }
      },
      car_wash_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: {
            tableName: 'car_wash'
          },
          key: "car_wash_id"
        }
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('car_wash_detail')
  }
};
