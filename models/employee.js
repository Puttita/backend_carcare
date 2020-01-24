/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employee', {
    employee_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    employee_username: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: true
    },
    employee_password: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    employee_fname: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    employee_lname: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    employee_tel: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    position_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'position',
        key: 'position_id'
      }
    }
  }, {
    tableName: 'employee'
  });
};
