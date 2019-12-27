let db = require('../models')

module.exports.insert = async function(data){
    await db.type_car.upsert({
        type_car_id: data.type_car_id,
        size: data.size,
        brand: data.brand,
        model: data.model
    })
}

module.exports.getTypecar = async function() {
    return await db.type_car.findAll()
}

module.exports.deleteType = async function(id){
    return await db.type_car.destroy({where:{type_car_id: id}})
}