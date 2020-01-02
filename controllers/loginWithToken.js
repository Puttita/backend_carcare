var express = require('express');
var router = express.Router();


router.get('/', async function (req, res, next) {
    res.json({result: 'Success', ...req.authInfo})
})
module.exports = router;