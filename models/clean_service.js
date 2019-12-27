/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('clean_service', {
    clean_service_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    service_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'clean_service'
  });
};
