var express = require('express')
var router = express.Router();
var booking = require('../services/booking-service')

router.get('/', async function (req, res, next) {
    let data = await booking.getBooking()
    res.json({
        result: 'Success',
        data: data
    });
});

module.exports = router;