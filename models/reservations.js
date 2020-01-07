/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reservations', {
    reserv_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    customer_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    license: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    total_price: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    reserv_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    reserv_status: {
      type: DataTypes.DATE,
      allowNull: false
    },
    employee_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'employee',
        key: 'employee_id'
      }
    },
    members_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'members',
        key: 'members_id'
      }
    },
    car_wash_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'car_wash',
        key: 'car_wash_id'
      }
    },
    promotion_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'promotion',
        key: 'promotion_id'
      }
    }
  }, {
    tableName: 'reservations'
  });
};
