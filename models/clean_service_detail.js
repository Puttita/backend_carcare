/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('clean_service_detail', {
    clean_service_detail_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    service_price: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    service_duration: {
      type: DataTypes.TIME,
      allowNull: false
    },
    clean_service_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'clean_service',
        key: 'clean_service_id'
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
    tableName: 'clean_service_detail'
  });
};
