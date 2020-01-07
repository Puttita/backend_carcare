/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('members', {
    members_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    members_username: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: true
    },
    members_password: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    members_fname: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    members_lname: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    members_address: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    members_tel: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    create_datetime: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'members'
  });
};
