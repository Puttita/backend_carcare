/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('car_detail', {
    car_detail_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    model: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    car_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'car',
        key: 'car_id'
      }
    },
    type_car_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'type_car',
        key: 'type_car_id'
      }
    }
  }, {
    tableName: 'car_detail'
  });
};
