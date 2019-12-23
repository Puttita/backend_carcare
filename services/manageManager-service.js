let db = require('../models')

module.exports.insert = async function(data) {
    await db.employee.upsert({
        id: data.employee_id,
        username: data.employee_username,
        fname: data.employee_fname,
        lname: data.employee_lname,
        tel: data.employee_tel,
        position: data.position_id,
        create_datetime: data.create_datetime
    })
   
}   
module.exports.getManager = async function(){
    return await db.employee.findAll()
}
