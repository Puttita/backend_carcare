/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('car_wash', {
    car_wash_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    car_wash_name: {
      type: DataTypes.STRING(100),
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
    tableName: 'car_wash'
  });
};
