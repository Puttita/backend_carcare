let db = require('../models')

module.exports.insert = async function (data) {
    await db.clean_service.upsert({
        clean_service_id: data.clean_service_id,
        service_name: data.service_name,
        service_price: data.service_price,
        service_duration: data.service_duration,
        type_car_id: data.type_car_id
    })
}

module.exports.getCleanservice = async function () {
    let clean = await db.sequelize.query(`select clean_service.clean_service_id, clean_service.service_name, 
    clean_service.service_price, clean_service.service_duration ,type_car.type_car_id ,type_car.size 
    from clean_service 
    join type_car on clean_service.type_car_id = type_car.type_car_id `)
    return clean
}

module.exports.deleteCleanservice = async function (id) {
    return await db.clean_service.destroy({ where: { clean_service_id: id } })
}
// module.exports.getCleanservice = async function() {
//     return await db.clean_service.findAll()
// }