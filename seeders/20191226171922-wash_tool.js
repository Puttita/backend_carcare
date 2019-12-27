'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('wash_tool' ,[{
      wash_tool_id: 1,
      tool_name: 'เครื่องดูดฝุ่น',
      amount: '2',
      tool_status: 1,
      employee_id: 2
    }])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('wash_tool')
  }
};
