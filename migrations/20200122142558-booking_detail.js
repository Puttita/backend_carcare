'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('booking_detail', {
      booking_detail_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      total: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      time_duration: {
        type: Sequelize.TIME,
        allowNull: false
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
      },
      reserv_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'reservations'
          },
          key: "reserv_id"
        }
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("booking_detail")
  }
};