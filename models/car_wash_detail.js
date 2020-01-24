/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('car_wash_detail', {
    car_wash_detail_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    employee_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'employee',
        key: 'employee_id'
      }
    },
    car_wash_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'car_wash',
        key: 'car_wash_id'
      }
    }
  }, {
    tableName: 'car_wash_detail'
  });
};
