let db = require('../models')

module.exports.insert = async function(data){
    await db.wash_tool.upsert({
        wash_tool_id: data.wash_tool_id,
        tool_name: data.tool_name,
        amount: data.amount,
        tool_status: data.tool_status,
        employee_id: data.employee_id
    })
}

module.exports.getTool = async function() {
    return await db.wash_tool.findAll()
}

module.exports.deleteTool = async function(id){
    return await db.wash_tool.destroy({where:{wash_tool_id: id}})
}