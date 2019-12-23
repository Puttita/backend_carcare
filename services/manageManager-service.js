let db = require('../models')
const hash = require('../utilities/passwordEncodee')

module.exports.insert = async function(data) {
    await db.employee.upsert({
        employee_id: data.employee_id,
        employee_username: data.employee_username,
        employee_password: await hash.hash(data.employee_password),
        employee_fname: data.employee_fname,
        employee_lname: data.employee_lname,
        employee_tel: data.employee_tel,
        position_id: data.position_id,
        create_datetime: data.create_datetime
    })
   
}   
module.exports.getManager = async function(){
    return await db.employee.findAll()
}
