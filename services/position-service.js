let db = require('../models')

module.exports.getAll = async function () {
    return await db.position.findAll()
}

module.exports.getAllEmp = async function () {
    let emp = await db.sequelize.query(`select * from position
    where position.position_id = 3 or position.position_id = 4 or position.position_id = 5; `)
    return emp[0]
}