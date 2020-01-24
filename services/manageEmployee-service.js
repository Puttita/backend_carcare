let db = require('../models')
const hash = require('../utilities/passwordEncodee')

module.exports.insert = async function (data) {
    await db.employee.upsert({
        employee_id: data.employee_id,
        employee_username: data.employee_username,
        employee_password: await hash.hash(data.employee_password),
        employee_fname: data.employee_fname,
        employee_lname: data.employee_lname,
        employee_tel: data.employee_tel,
        position_id: data.position_id,

    })
}
module.exports.update = async function (id, data) {
    await db.employee.update({
        employee_id: id,
        employee_fname: data.employee_fname,
        employee_lname: data.employee_lname,
        employee_tel: data.employee_tel,
        position_id: data.position_id,

    },
        { where: { employee_id: id } }
    )
}
module.exports.getAllEmployee = async function () {
    let employee = await db.sequelize.query(`select e.employee_id, e.employee_username, e.employee_password, 
    e.employee_fname, e.employee_lname, e.employee_tel, e.position_id, p.position_role, p.position_work
    from employee e
    left join position p on e.position_id = p.position_id
    where e.position_id = 3 or e.position_id = 4 or e.position_id = 5`)
    return employee;
}
// module.exports.getAllEmployee = async function () {
//     let user = await db.employee.findAll()

module.exports.getProfileByID = async function (id) {
    let employee = await db.employee.findOne({ where: { employee_id: id } })
    if (employee == null) throw 'not found'
    return employee
}

module.exports.getEmployeeByID = async function (id) {
    let employee = await db.sequelize.query(`select e.employee_id, e.employee_username, e.employee_password, 
    e.employee_fname, e.employee_lname, e.employee_tel, e.position_id, p.position_role, p.position_work
    from employee e
    left join position p on e.position_id = p.position_id
    where e.employee_id = ${id}`)
    return employee[0];
}

module.exports.deleteEmployee = async function (id) {
    return await db.employee.destroy({ where: { employee_id: id } })
}

// module.exports.getEmployee = async function(){
//     let employee = await db.sequelize.query(``)
//     return 
// }