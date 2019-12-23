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

module.exports.getAllEmployee = async function(){
    return await db.employee.findAll()
}

module.exports.getEmployeeByID = async function(id){
    let employee = await db.employee.findOne({where:{employee_id: id}})
    if(employee == null) throw 'not found'
    return employee
}
module.exports.deleteEmployee = async function(id){
    return await db.employee.delete({where:{employee_id: id}})

}