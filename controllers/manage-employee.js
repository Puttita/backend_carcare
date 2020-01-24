var express = require('express')
var router = express.Router();
var managEmployee = require('../services/manageEmployee-service')

router.get('/', async function (req, res, next) {
    let dataEmp = await managEmployee.getAllEmployee()
    res.json({
        result: 'Success',
        data: dataEmp
    })
});
router.get('/edit/:id', async function (req, res, next) {
    let { id } = req.params
    try {
        let dataEmp = await managEmployee.getEmployeeByID(id)
        res.json({
            result: 'Success',
            data: dataEmp
        })
    } catch (Exception) {
        console.log(Exception);

        res.sendStatus(400)
    }
});
router.get('/editprofile/:id', async function (req, res, next) {
    let { id } = req.params
    try {
        let dataEmp = await managEmployee.getEmployeeByID(id)
        res.json({
            result: 'Success',
            data: dataEmp
        })
    } catch (Exception) {
        console.log(Exception);

        res.sendStatus(400)
    }
});
router.post('/', async function (req, res, next) {
    const data = req.body
    try {
        let result = await managEmployee.insert(data)
        res.status(200).json({ result: 'Success' })
    } catch (Exception) {
        console.error(Exception)
        res.sendStatus(400)
    }
});
router.put('/edit/:id', async function (req, res, next) {
    const { id } = req.params
    const data = req.body
    console.log(data);
    console.log(id);

    try {
        let result = await managEmployee.update(id, data)
        res.status(200).json({
            result: 'Success',
            data: result
        })
        console.log(result);

    } catch (Exception) {
        console.error(Exception)
        res.sendStatus(400)
    }
});
router.delete('/:id', async function (req, res, next) {
    let { id } = req.params
    try {
        let result = await managEmployee.deleteEmployee(id)
        res.sendStatus(200)
    } catch (Exception) {
        res.sendStatus(400)
    }
})


module.exports = router;
