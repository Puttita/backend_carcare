/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('booking_detail', {
    booking_detail_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    total: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    time_duration: {
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
    reserv_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'reservations',
        key: 'reserv_id'
      }
    }
  }, {
    tableName: 'booking_detail'
  });
};
