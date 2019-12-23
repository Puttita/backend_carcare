var express = require('express');
var router = express.Router();
var logOut = require('../services/logout-service')

/* GET users listing. */
router.get('/', async function(req, res, next) {
    const { authorization } = req.headers
    try {
        await logOut.logout(authorization)
        res.sent('200')
    }catch (Exception){
        res.send('401', Exception.toString())
    }
});

module.exports = router;
