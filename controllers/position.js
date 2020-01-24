var express = require('express')
var router = express.Router();
var showPosition = require('../services/position-service')

router.get('/', async function (req, res, next) {
    let data = await showPosition.getAllEmp();
    res.json({
        result: 'Success',
        data: data
    })
});
module.exports = router;