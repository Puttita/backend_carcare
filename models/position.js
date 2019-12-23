/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('position', {
    position_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    position_role: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    position_work: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'position'
  });
};
