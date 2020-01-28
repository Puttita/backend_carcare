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

module.exports.checkBeforeDate = async function(req, res, next) {
   const { start_book_date } = req.body
   try{
       await booking.checkBeforeDate(start_book_date)
       next()
   }catch(Exception){
       res.send(400)
   }
}

module.exports.checkDateByCarWashID = async function(req, res, next) {
    const { start_book_date, end_book_date } = req.body
    try{
        const car_wash = await booking.checkDateByCarWashID(start_book_date, end_book_date)
        req.body.car_wash_id = car_wash.car_wash_id
        next()
    }catch(Exception){
        res.send(400)
    }
}


module.exports.book = async function(req, res, next){
  const data = req.body
  try{
    let result = await booking.insert(data)
    res.status(200).json({
       result: 'Success',
       data: data
    })
  }catch(Exception){
    console.error(Exception)
    res.json({
     result: 'Bad Request'
    })
  }
}

router.post('/cashier', this.checkDateByCarWashID, this.book)
router.post('/',this.checkBeforeDate, this.checkDateByCarWashID, this.book)

module.exports.router = router;
