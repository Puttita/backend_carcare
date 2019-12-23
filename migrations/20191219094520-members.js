'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('members', {
      members_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      members_username:{
        type: Sequelize.STRING(45),
        allowNull: false,
        unique: true
      },
      members_password:{
        type: Sequelize.STRING(100),
        allowNull: false
      },
      members_fname:{
        type: Sequelize.STRING(255),
        allowNull: false
      },
      members_lname:{
        type: Sequelize.STRING(255),
        allowNull: false
      },
      members_address:{
        type: Sequelize.STRING(255),
        allowNull: false
      },
      members_tel:{
        type: Sequelize.STRING(15),
        allowNull: false
      },
      create_datetime:{
        type: Sequelize.DATE,
        allowNull:false,
        defaultValue: Sequelize.NOW
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('members');    
  }
};
