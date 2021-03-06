var express = require('express')
var router = express.Router();
var manageCleanservice = require('../services/manageCleanservice-service')

router.get('/', async function (req, res, next) {
    let data = await manageCleanservice.getCleanservice()
    res.json({
        result: 'Success',
        data: data
    })
});

router.get('/getService/:id', async function (req, res, next) {
    let { id } = req.params
    try {
        let data = await manageCleanservice.getCleanserviceByid(id)
        res.status(200).json({
            result: 'Success',
            data: data
        })
    } catch (Exception) {
        console.log(Exception);
        res.sendStatus(400)
    }
});
router.get('/getService', async function (req, res, next) {
    let data = await manageCleanservice.getService()
    res.json({
        result: 'Success',
        data: data
    })
});
router.get('/:id', async function (req, res, next) {
    let { id } = req.params
    try {
        let data = await manageCleanservice.getServiceByTypecar(id)
        res.status(200).json({
            result: 'Success',
            data: data
        })
    } catch (Exception) {
        console.log(Exception);
        res.sendStatus(400)
    }
})
router.post('/', async function (req, res, next) {
    const data = req.body
    try {
        let result = await manageCleanservice.insert(data)
        res.status(200).json({ result: 'Success' })
    } catch (Exception) {
        console.error(Exception)
        res.sendStatus(400)
    }
});

router.put('/', async function (req, res, next) {
    const data = req.body
    try {
        let result = await manageCleanservice.insert(data)
        res.status(200).json({ result: 'Success' })
    } catch (Exception) {
        console.error(Exception)
        res.sendStatus(400)
    }
});

router.delete('/:id', async function (req, res, next) {
    let { id } = req.params
    try {
        let result = await manageCleanservice.deleteCleanservice(id)
        res.status(200).json({ result: 'Success' })
    } catch (Exception) {
        res.sendStatus(400)
    }
})
module.exports = router;