"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("position", {
      position_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      position_role: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      position_work: {
        type: Sequelize.STRING(255),
        allowNull: true
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('position');    
  }
};
