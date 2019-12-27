/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('withdraw_return', {
    withdraw_return_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    detail: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    date_start: {
      type: DataTypes.DATE,
      allowNull: false
    },
    date_end: {
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
    }
  }, {
    tableName: 'withdraw_return'
  });
};
