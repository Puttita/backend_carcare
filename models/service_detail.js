/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('service_detail', {
    service_detail_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    service_price: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    service_duration: {
      type: DataTypes.DATE,
      allowNull: false
    },
    type_car_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'type_car',
        key: 'type_car_id'
      }
    },
    clean_service_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'clean_service',
        key: 'clean_service_id'
      }
    }
  }, {
    tableName: 'service_detail'
  });
};
