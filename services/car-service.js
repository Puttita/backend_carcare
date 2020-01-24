let db = require('../models')

module.exports.insert = async function (data) {
    await db.car_detail.upsert({
        car_detail_id: data.car_detail_id,
        model: data.model,
        car_id: data.car_id,
        type_car_id: data.type_car_id,
    })
    await db.car.upsert({
        car_id: data.car_id,
        brand: data.brand
    })
}

module.exports.getCar = async function () {
    let car = await db.sequelize.query(`select * from car_detail c
    inner join car on c.car_id = car.car_id
    inner join type_car on c.type_car_id = type_car.type_car_id;`)
    return car
}
module.exports.getBrand = async function () {
    return await db.car.findAll();
}
module.exports.getModel = async function (id) {
    let car = await db.sequelize.query(`select * from car_detail c 
    inner join car on c.car_id = car.car_id
    inner join type_car t on c.type_car_id = t.type_car_id
    where c.car_id = ${id};`)
    return car

}
module.exports.getSizeById = async function (id) {
    let size = await db.sequelize.query(`select * from car_detail c 
    inner join type_car t on c.type_car_id = t.type_car_id
    where c.car_detail_id = ${id};`)
    return size
}

module.exports.deleteCar = async function (id) {
    return await db.car_detail.destroy({ where: { car_detail_id: id } })
}

// module.exports.getCar = async function () {
//     return await db.car.findAll()
// }