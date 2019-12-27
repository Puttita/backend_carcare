"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("employee", {
      employee_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      employee_username: {
        type: Sequelize.STRING(45),
        allowNull: false,
        unique: true
      },
      employee_password: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      employee_fname: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      employee_lname: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      employee_tel: {
        type: Sequelize.STRING(15),
        allowNull: false
      },
      status: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      position_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'position'
          },
          key: "position_id"
        }
      },
      create_datetime: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('employee');
  }
};
