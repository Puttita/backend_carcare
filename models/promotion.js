/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('promotion', {
    promotion_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    detail: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    date_start: {
      type: DataTypes.DATE,
      allowNull: false
    },
    date_end: {
      type: DataTypes.DATE,
      allowNull: false
    },
    discount_percent: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'promotion'
  });
};
