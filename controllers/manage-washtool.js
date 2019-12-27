var express = require('express')
var router = express.Router();
var manageTool = require('../services/manageWashTool-service')

router.get('/', async function (req, res, next) {
    let data = await manageTool.getTool()
    res.json(data);
});

router.post('/', async function (req, res, next) {
    const data = req.body
    try {
        let result = await manageTool.insert(data)
        res.sendStatus(200)
    } catch (Exception) {
        console.error(Exception)
        res.sendStatus(400)
    }
});

router.delete('/:id', async function (req, res, next) {
    let { id } = req.params
    try {
        let result = await manageTool.deleteTool(id)
        res.sendStatus(200)
    } catch (Exception) {
        res.sendStatus(400)
    }
})
module.exports = router;