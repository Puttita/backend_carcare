var express = require('express')
var router = express.Router();
var managEmployee = require('../services/manageEmployee-service')

router.get('/', async function(req, res, next) {
    let dataEmp = await managEmployee.getAllEmployee()
    res.json(dataEmp);
});
router.get('/:id', async function(req, res, next) {
    let { id } = req.params
    try {
        let dataEmp = await managEmployee.getEmployeeByID(id)
        res.json(dataEmp)
    }catch (Exception) {
        res.sent(400)
    }
});
router.post('/', async function(req, res, next) {
    const data = req.body
    const { id } = req.authInfo
    try {
        let result = await managEmployee.insert(data, id)
        res.json(result)
    } catch (Exception) {
        res.sent(400)
    }
})


module.exports = router;
