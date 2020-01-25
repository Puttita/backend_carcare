let db = require('../models')
const Moment = require('moment')
const momentRange = require('moment-range')
const moment = momentRange.extendMoment(Moment)

module.exports.insert = async function (data) {
    await db.reservations.upsert({
        reserv_id: data.reserv_id,
        customer_name: data.customer_name,
        license: data.license,
        total_price: data.total_price,
        reserv_date: data.reserv_date,
        start_date: data.start_date,
        end_date: data.end_date,
        reserv_status: data.reserv_status,
        employee_id: data.employee_id,
        members_id: data.members_id,
        car_wash_id: data.car_wash_id,
        promotion_id: data.promotion_id,

    })
    await db.booking_detail.upsert({
        booking_detail_id: data.booking_detail_id,
        total: data.total,
        time_duration: data.time_duration,
        clean_service_id: data.clean_service_id,
        reserv_id: data.reserv_id,
    })
}
module.exports.getBooking = async function () {
    let booking = await db.sequelize.query(`select reservations.reserv_id, reservations.customer_name, reservations.license, reservations.total_price,
    reservations.reserv_date, reservations.start_date, reservations.end_date, reservations.reserv_status, reservations.employee_id,
    reservations.members_id, reservations.car_wash_id, reservations.promotion_id, employee.employee_fname, employee.employee_lname,
    car_wash.car_wash_name   
    from reservations
    left join employee on reservations.employee_id = employee.employee_id
    left join car_wash on reservations.car_wash_id = car_wash.car_wash_id
    order by reservations.reserv_id asc
`)
    return booking
}

module.exports.getBookingDetail = async function (id) {
    let detail = await db.sequelize.query(`select * 
    from reservations
    left join employee on reservations.employee_id = employee.employee_id
    left join car_wash on reservations.car_wash_id = car_wash.car_wash_id
    left join booking_detail b on b.reserv_id = reservations.reserv_id
    left join clean_service c on b.clean_service_id = c.clean_service_id
    where b.reserv_id = ${id}`)
    return detail[0];
}

module.exports.checkDateByCarWashID = async function(start_booking_date, end_booking_date){
     const slot1 = await this.checkDateBooking(start_booking_date, end_booking_date, 1)
     const slot2 = await this.checkDateBooking(start_booking_date, end_booking_date, 2)

     if(slot1 && slot2){
         return null;
     } else if(slot1 == false && slot2 == false){
         return {car_wash_id: 1}
     } else if(slot1) {
         return {car_wash_id: 2}
     } else if(slot2) {
         return {car_wash_id: 1}
     }
}


module.exports.checkDateBooking = async function (start_booking_date, end_booking_date, id) {
    let start_book_date = moment(start_booking_date, 'YYYY-MM-DD hh:mm:ss') //user want to booking
    let end_book_date = moment(end_booking_date, 'YYYY-MM-DD hh:mm:ss') //after user select service
    const book = moment.range(start_book_date, end_book_date)

    let reservations = await db.reservations.findAll({where:{car_wash_id: id}})
    
    for (const data of reservations) {
        let tmp_start_booked_date = await moment(data.start_date).format('hh:mm:ss').toString()
        let tmp_end_booked_date = await moment(data.end_date).format('hh:mm:ss').toString()
        let start_booked_date = await moment(`${data.reserv_date} ${tmp_start_booked_date}`, 'YYYY-MM-DD hh:mm:ss')
        let end_booked_date = await moment(`${data.reserv_date} ${tmp_end_booked_date}`, 'YYYY-MM-DD hh:mm:ss') 
	
        let was_book = await moment.range(start_booked_date, end_booked_date)

        return await was_book.overlaps(book)        
    }  
    return false
}

module.exports.checkAfterDate = function(start_book_date){
   if(!moment().isAfter(moment(start_book_date))) throw 'please booking before a day'
} 
