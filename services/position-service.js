let db = require('../models')

module.exports.getAll = async function() {
    return await db.position.findAll()
}