/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('withdraw_return_detail', {
    wr_detail_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    amount: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    withdraw_return_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'withdraw_return',
        key: 'withdraw_return_id'
      }
    },
    wash_tool_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'wash_tool',
        key: 'wash_tool_id'
      }
    }
  }, {
    tableName: 'withdraw_return_detail'
  });
};
