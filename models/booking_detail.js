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
      type: DataTypes.DATE,
      allowNull: false
    },
    service_detail_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'service_detail',
        key: 'service_detail_id'
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
