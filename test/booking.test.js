let assert = require('assert')
let bookingController  = require('../controllers/booking-service')
let mockResponse = require('mock-express-response')
let mockRequest = require('mock-express-request')

let db = require('../models')
let sinon = require('sinon')
let moment = require('moment')
describe('booking', function () {

    beforeEach(async function () {    
          await db.position.create({position_id: 1, position_role:'testrole'})
          await db.employee.create({
          employee_id: 1,
          employee_username: 'user.mod',
          employee_password: 'pass.out',
          employee_fname: 'tesla',
          employee_lname: 'edison',
          employee_tel: '890747762',
          position_id: 1
        })
    })

    it('should return 200 and reservation data', async function(){
      let body = {
         reservation: {
           reserv_id: 1,
           customer_name: 'testname',
           license: 'DE222',
           total_price: 160,
           reserv_date: await moment().format('YYYY-MM-DD'),
           start_date: await moment().format('HH:mm:ss'),
           end_date: await moment().add(30, 'minuts').format('HH:mm:ss'), 
           reserv_status: 0,
           employee_id: 1,
           car_wash_id: 1,
         },
         booking_detail: [{
           booking_detail_id: 1,
           total: 200,
           time_duration: '00:30:00',
           clean_service_id: 1,
           reserv_id: 1
          }
         ]
      }
      let req = new mockRequest({body})      
      let res = new mockResponse({})
      let next = function() { exec = true }
     
      await bookingController.book(req, res, next)
      await assert.equal(res._getJSON().result, 'Success', 'should return success')
      await assert.equal(typeof res._getJSON().data.reservation, 'object', 'should return object')
      
      const reserv = await db.reservations.findOne({where:{reserv_id: 1}})
      await assert.equal(body.reservation.reserv_id, reserv.reserv_id, `should return ${body.reservation.reserv_id}`)
      await assert.equal(body.reservation.customer_name, reserv.customer_name, `should return ${body.reservation.customer_name}`)
      await assert.equal(body.reservation.license, reserv.license, `should return ${body.reservation.reserv_id}`)
      await assert.equal(body.reservation.reserv_id, reserv.reserv_id, `should return ${body.reservation.reserv_id}`)
   })

   afterEach(async function(){
       await db.sequelize.query('PRAGMA foreign_keys = OFF')
       await db.employee.destroy({where:{}})
       await db.position.destroy({where:{}})
       await db.reservations.destroy({ where: {}})
       await db.booking_detail.destroy({ where: {}})
       await db.members.destroy({ where: {}})
       await db.sequelize.query('PRAGMA foreign_keys = ON')
  })
})
