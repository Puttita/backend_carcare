/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wash_tool', {
    wash_tool_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    tool_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    amount: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    tool_status: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    employee_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'employee',
        key: 'employee_id'
      }
    }
  }, {
    tableName: 'wash_tool'
  });
};
