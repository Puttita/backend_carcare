let assert = require('assert')
let canBooking = require('../services/booking-service.js')
let db = require('../models')
let sinon = require('sinon')
let moment = require('moment')
describe('booking', function () {

    beforeEach(async function () {
        await db.sequelize.query('PRAGMA foreign_keys = OFF')
        await db.reservations.destroy({ where: {} })
    })
    it('should insert data', async function () {
        const body = {
            reserv_id: 1,
            customer_name: 'surikarn',
            license: '3กฮ 3086',
            total_price: 280,
            reserv_date: '2020-01-13',
            start_date: '09:45:00',
            end_date: '10:40:00',
            reserv_status: 0,
            employee_id: 0,
            car_wash_id: 2,
            booking_detail_id: 1,
            total: 3,
            time_duration: '01:15:00',
            clean_service_id:1
        }
        await canBooking.insert(body)
        let insert = await db.booking_detail.findOne({where:{reserv_id: 1}})        
        await assert.equal(insert.reserv_id, 1, 'reserv_id should return 1')
        await assert.equal(insert.booking_detail_id, 1, 'booking_detail_id should return `1`')
        await assert.equal(insert.total, 3, 'booking_detail_id should return `3`')        
        await assert.equal(insert.clean_service_id, 1, 'clean_service_id Should return `1`')
    })
})