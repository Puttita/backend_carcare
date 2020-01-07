let db = require('../models')

module.exports.getTypecar = async function () {
    return await db.type_car.findAll()
}