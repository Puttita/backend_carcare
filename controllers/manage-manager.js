var express = require('express')
var router = express.Router();
var manageManager = require('../services/manageManager-service')

router.get('/', async function(req, res, next) {
    let dataMG = await manageManager.getManager()
    res.json(dataMG);
})
router.post('/', async function(req, res, next) {
    const dataMG = req.body
    const { id } = req.authInfo
    try {
        let result = await manageManager.insert(dataMG, id)
        res.json(result)
    } catch (Exception) {
        res.sent(400)
    }
})
module.exports = router;
