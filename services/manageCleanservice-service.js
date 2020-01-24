let db = require('../models')

module.exports.insert = async function (data) {
    await db.clean_service_detail.upsert({
        clean_service_detail_id: data.clean_service_detail_id,
        service_price: data.service_price,
        service_duration: data.service_duration,
        clean_service_id: data.clean_service_id,
        type_car_id: data.type_car_id,
    })
}

module.exports.getCleanservice = async function () {
    let clean = await db.sequelize.query(`select * from clean_service_detail c 
    inner join clean_service on c.clean_service_id = clean_service.clean_service_id
    inner join type_car on c.type_car_id = type_car.type_car_id order by c.clean_service_detail_id asc;`)
    return clean;
}
module.exports.getCleanserviceByid = async function (id) {
    let clean = await db.sequelize.query(`select * from clean_service_detail c 
    inner join clean_service on c.clean_service_id = clean_service.clean_service_id
    inner join type_car on c.type_car_id = type_car.type_car_id 
    where c.type_car_id = ${id}
    order by c.clean_service_detail_id asc;`)
    return clean;
}
module.exports.getService = async function () {
    return await db.clean_service.findAll();
}
module.exports.getServiceByTypecar = async function (id) {
    let clean = await db.sequelize.query(`select clean_service.clean_service_id, clean_service.service_name, 
    clean_service.service_price, clean_service.service_duration ,type_car.type_car_id ,type_car.size 
    from clean_service 
    join type_car on clean_service.type_car_id = type_car.type_car_id 
    where clean_service.type_car_id = ${id}`)
    if (clean == null || clean == []) throw 'not found'
    return clean
}
module.exports.deleteCleanservice = async function (id) {
    return await db.clean_service_detail.destroy({ where: { clean_service_detail_id: id } })
}
// module.exports.getCleanservice = async function() {
//     return await db.clean_service.findAll()
// }