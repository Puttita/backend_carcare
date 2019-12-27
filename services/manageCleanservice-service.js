let db = require('../models')

module.exports.insert = async function(data){
    await db.clean_service.upsert({
        clean_service_id: data.clean_service_id,
        service_name: data.service_name
    })
}

module.exports.getCleanservice = async function() {
    return await db.clean_service.findAll()
}

module.exports.deleteCleanservice = async function(id){
    return await db.clean_service.destroy({where:{clean_service_id: id}})
}