var express = require('express')
var router = express.Router();
var manageManager = require('../services/manageManager-service')

router.get('/', async function(req, res, next) {
    let dataMG = await manageManager.getManager()
    res.json(dataMG);
})
router.post('/', async function(req, res, next) {
    const dataMG = req.body
    console.log(dataMG)
    try {
        let result = await manageManager.insert(dataMG)
        res.sendStatus(200)
    } catch (Exception) {
        console.error(Exception)
        res.sendStatus(400)
    }
})
module.exports = router;
