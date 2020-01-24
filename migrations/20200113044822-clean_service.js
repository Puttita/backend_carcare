'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('clean_service', {
      clean_service_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      service_name: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      wash_tool_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: {
            tableName: 'wash_tool'
          },
          key: "wash_tool_id"
        }
      },
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('clean_service')
  }
};
