var express = require('express')
var router = express.Router();
var manageTypecar = require('../services/manageTypecar-service')

router.get('/', async function (req, res, next) {
    let data = await manageTypecar.getTypecar()
    res.json({
        result: 'Success',
        data: data
    });
});
module.exports = router;