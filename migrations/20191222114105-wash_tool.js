'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('wash_tool', {
      wash_tool_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      tool_name: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      amount: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      tool_status: {
        type: Sequelize.INTEGER,
        allowNull: true
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
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("wash_tool")
  }
};
