'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('reservations', {
      reserv_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      customer_name: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      license: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      total_price: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      reserv_date: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      start_date: {
        type: Sequelize.TIME,
        allowNull: false
      },
      end_date: {
        type: Sequelize.TIME,
        allowNull: false
      },
      reserv_status: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      employee_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'employee'
          },
          key: "employee_id"
        }
      },
      members_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: {
            tableName: 'members'
          },
          key: "members_id"
        }
      },
      car_wash_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'car_wash'
          },
          key: "car_wash_id"
        }
      },
      promotion_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: {
            tableName: 'promotion'
          },
          key: "promotion_id"
        }
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("reservations")
  }
};
