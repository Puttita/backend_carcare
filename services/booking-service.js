let db = require('../models')
let moment = require('moment')

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

module.exports.checkDateBooking = async function (start_datetime, end_datetime) {
    // let date = await db.sequelize.query(`select * from reservations 
    // where reservations.reserv_date = '${startdate}' and reservations.start_date = '${time}' 
    // and reservations.end_date <= '${time}' and reservations.car_wash_id between (1 and 2) `)

    /* CASE 1
        SET start_book_date is 2020-01-24 09:00:00
        SET end_book_date is 2020-01-24 09:30:00
        SET start_booked_date is start on 2020-01-24 09:10:00 
        SET end_booked_date is end on 2020-01-24 09:40:00

        start_book_date is between         
    */
    let data = await db.reservations.findAll()

    let start_date = moment(`${date.reserv_date} ${date.start_date}`)
    let end_date = moment(`${date.reserv_date} ${date.end_date}`)
    let isBetween = moment().isBetween(start_date, end_date)
    if (isBetween) throw 'can not booking please change time'
    return date[0];
} 
