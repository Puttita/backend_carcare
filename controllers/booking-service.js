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

router.get('/detail/:id', async function (req, res, next) {
    try {
        let id = req.params.id
        let data = await booking.getBookingDetail(id)
        res.json({
            result: 'Success',
            data: data
        });
    } catch (Exception) {
        console.log(Exception);

        res.sendStatus(400)
    }
});
router.post('/checkbooking', async function (req, res, next) {

    try {
        const { startdate, time } = req.body
        let data = await booking.checkDateBooking(startdate, time)
        res.json({
            result: 'Success',
            data: data
        });
    } catch (Exception) {
        //console.log(Exception);

        res.status(400)
    }
});

router.post('/', async function (req, res, next) {
    const data = req.body
    try {
        let result = await booking.insert(data)
        res.status(200).json({
            result: 'Success',
            data: data
        })
    } catch (Exception) {
        console.error(Exception)
        res.sendStatus(400)
    }
});
module.exports = router;