'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('promotion', [{
      promotion_id: 1,
      detail: 'ล้างรถสิ้นปี รับส่วนลด 10%!!!',
      date_start: '2019-12-30',
      date_end: '2019-12-31',
      discount_percent: 10
    }])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('promotion')
  }
};
