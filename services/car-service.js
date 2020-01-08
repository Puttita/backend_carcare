let db = require('../models')

module.exports.insert = async function (data) {
    await db.car.upsert({
        car_id: data.car_id,
        brand: data.brand,
        model: data.model,
        type_car_id: data.type_car_id,
    })
}

module.exports.getCar = async function () {
    let car = await db.sequelize.query(`select car.car_id, car.brand, car.model, type_car.type_car_id, type_car.size 
    from car 
    join type_car on car.type_car_id = type_car.type_car_id `)
    return car
}

module.exports.deleteCar = async function (id) {
    return await db.car.destroy({ where: { car_id: id } })
}

// module.exports.getCar = async function () {
//     return await db.car.findAll()
// }