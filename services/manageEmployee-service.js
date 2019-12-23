let db = require('../models')

module.exports.insert = async function(data) {
    await db.employee.upsert({
        id: data.employee_id,
        username: data.employee_username,
        password: data.employee_password,
        fname: data.employee_fname,
        lname: data.employee_lname,
        tel: data.employee_tel,
        position: data.position_id,
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