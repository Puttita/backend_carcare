/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('car', {
    car_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    brand: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'car'
  });
};
