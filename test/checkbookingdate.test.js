let assert = require('assert')
let canBooking = require('../services/booking-service.js')
let db = require('../models')
let sinon = require('sinon')
let moment = require('moment')
describe('can booking with naver booked', function () {

  beforeEach(async function(){
    await db.sequelize.query('PRAGMA foreign_keys = OFF')
    await db.reservations.destroy({ where: {}})
  })
  it('should return car_wash_id `1`', async function () {
    let body = { start_booking_date: '2020-01-15 08:00:00', end_booking_date: '2020-01-15 09:15:00' }
    let canbook = await canBooking.checkDateByCarWashID(body.start_booking_date, body.end_booking_date)
    await assert.equal(canbook.car_wash_id, 1, 'should return 1')
  })
})

describe('can booking with booked', function(){
  beforeEach(async function () {
    await db.sequelize.query('PRAGMA foreign_keys = OFF')
    await db.reservations.destroy({ where: {} })
    await db.reservations.create({
      reserv_id: 1,
      customer_name: 'akaporn',
      license: 'มจร 733',
      total_price: 200,
      reserv_date: await moment('2020-01-15', 'YYYY-MM-DD').toDate(),
      start_date: await moment('08:00:00', 'hh:mm:ss').toDate(),
      end_date: await moment('09:15:00', 'hh:mm:ss').toDate(),
      reserv_status: 0,
      employee_id: 4,
      members_id: null,
      car_wash_id: 1,
      promotion_id: null,
    })

  })
  it('should car wash id `2`', async function () {
    let body = { start_booking_date: '2020-01-15 08:00:00', end_booking_date: '2020-01-15 09:15:00' }
    let canbook = await canBooking.checkDateByCarWashID(body.start_booking_date, body.end_booking_date)
    await assert.equal(canbook.car_wash_id, 2, 'should return 2')
  })

  afterEach(async function () {
    await db.reservations.destroy({ where: {} })
  })
})

describe('cannot booking with already book', function () {

  beforeEach(async function () {
    await db.reservations.create({
      reserv_id: 1,
      customer_name: 'akaporn',
      license: 'มจร 733',
      total_price: 200,
      reserv_date: await moment('2020-01-15', 'YYYY-MM-DD').toDate(),
      start_date: await moment('08:00:00', 'hh:mm:ss').toDate(),
      end_date: await moment('09:15:00', 'hh:mm:ss').toDate(),
      reserv_status: 0,
      employee_id: 4,
      members_id: null,
      car_wash_id: 1,
      promotion_id: null,
    })

    await db.reservations.create({
      reserv_id: 2,
      customer_name: 'akaporn2',
      license: 'มจร 734',
      total_price: 200,
      reserv_date: await moment('2020-01-15', 'YYYY-MM-DD').toDate(),
      start_date: await moment('08:00:00', 'hh:mm:ss').toDate(),
      end_date: await moment('09:15:00', 'hh:mm:ss').toDate(),
      reserv_status: 0,
      employee_id: 4,
      members_id: null,
      car_wash_id: 2,
      promotion_id: null,
    })
  })

  it('should return exception', async function () {
    let body = { start_booking_date: '2020-01-15 08:00:00', end_booking_date: '2020-01-15 09:15:00' }
    try{
    await canBooking.checkDateByCarWashID(body.start_booking_date, body.end_booking_date)
    } catch(e){
      await assert.equal(e, 'please select other time', 'should return `please select other time`')
    }
  })

  afterEach(async function () {
    db.reservations.destroy({ where: {} })
  })
})

describe('before date', function(){
  it('should return true', async function(){
    const result = await canBooking.checkBeforeDate(moment().add(1, 'days').format('YYYY-MM-DD hh:mm:ss').toString())
    await assert.equal(result, true, 'should return true')
  })

  it('should return exception', async function(){
    try{
      await canBooking.checkBeforeDate(moment().add(1, 'days').format('YYYY-MM-DD hh:mm:ss').toString())
    }catch(Exception){
      await assert(Exception, 'please booking before a day', 'should return `please booking before a day`')
    }
  })
})
