let db = require("../models");
let passwordEncode = require("../utilities/passwordEncodee");
let jwt = require("jwt-simple");
let config = require("../config.json");
let moment = require("moment");

module.exports = {
  login: async function (username, password) {
    let employee = await db.employee.findOne({
      where: { employee_username: username }
    });
    if (employee == null) throw "not found user";
    if (
      !(await passwordEncode.matchPassword(
        password,
        employee.employee_password
      ))
    )
      throw "not match password";
    let token =
      "Bearer " +
      jwt.encode(
        {
          id: employee.employee_id,
          username: employee.employee_username,
          fname: employee.employee_fname,
          lname: employee.employee_lname,
          tel: employee.employee_tel,
          position: employee.position_id,
          iat: moment().unix(),
          exp: moment()
            .add(config.expire, "days")
            .unix()
        },
        config.scretKey
      );
    return {
      token: token,
      id: employee.employee_id,
      username: employee.employee_username,
      fname: employee.employee_fname,
      lname: employee.employee_lname,
      tel: employee.employee_tel,
      position: employee.position_id,
    };
  }
};