var express = require('express');
var router = express.Router();
var logIn = require('../services/login-service')

/* GET users listing. */
router.post('/login', async function (req, res, next) {
    const { username, password } = req.body
    try {
        let employee = await logIn.login(username, password)
        employee.result = true;
        res.json(employee)
    } catch (Exception) {
        res.send(401, { message: Exception.toString() })
    }
});


module.exports = router;
