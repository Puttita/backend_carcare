let db = require('../models')

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
}
module.exports.getBooking = async function () {
    let booking = await db.sequelize.query(`select reservations.reserv_id, reservations.customer_name, reservations.license, reservations.total_price,
    reservations.reserv_date, reservations.start_date, reservations.end_date, reservations.reserv_status, reservations.employee_id,
    reservations.members_id, reservations.car_wash_id, reservations.promotion_id, employee.employee_fname, employee.employee_lname,
    car_wash.car_wash_name   
    from reservations
    left join employee on reservations.employee_id = employee.employee_id
    left join car_wash on reservations.car_wash_id = car_wash.car_wash_id
`)
    return booking
}
