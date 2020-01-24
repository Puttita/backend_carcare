'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('employee', [{
     employee_id: 1,
     employee_username: 'admin',
     employee_password: '$2a$10$o0vKCpClkCFQ6VvIZ9dPYed7AWXr2rjGiWMND1O22t7D3LX9ddzzK',
     employee_fname: 'admin',
     employee_lname: 'admin',
     employee_tel: '0000000000',
     position_id: 1,
   },
   {
    employee_id: 2,
    employee_username: 'manager',
    employee_password: '$2a$10$o0vKCpClkCFQ6VvIZ9dPYed7AWXr2rjGiWMND1O22t7D3LX9ddzzK',
    employee_fname: 'manager',
    employee_lname: 'manager',
    employee_tel: '1111111111',
    position_id: 2,
   },
   {
    employee_id: 3,
    employee_username: 'cashier',
    employee_password: '$2a$10$o0vKCpClkCFQ6VvIZ9dPYed7AWXr2rjGiWMND1O22t7D3LX9ddzzK',
    employee_fname: 'cashier',
    employee_lname: 'cashier',
    employee_tel: '22222222222',
    position_id: 3,
   },
   {
    employee_id: 4,
    employee_username: 'cleaner1',
    employee_password: '$2a$10$o0vKCpClkCFQ6VvIZ9dPYed7AWXr2rjGiWMND1O22t7D3LX9ddzzK',
    employee_fname: 'cleaner',
    employee_lname: 'cleaner',
    employee_tel: '33333333333',
    status: 1,
    position_id: 4,
   },
   {
    employee_id: 5,
    employee_username: 'cleaner2',
    employee_password: '$2a$10$o0vKCpClkCFQ6VvIZ9dPYed7AWXr2rjGiWMND1O22t7D3LX9ddzzK',
    employee_fname: 'cleaner',
    employee_lname: 'cleaner',
    employee_tel: '44444444444',
    status: 1,
    position_id: 5,
   }
  ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('employee')
  }
};
