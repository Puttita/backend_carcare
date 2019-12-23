var express = require('express');
var router = express.Router();
let db = require('../models')

/* GET users listing. */
router.get('/', function(req, res, next) {
  // db.role.create( {
  //   role: 'authority'
  // })
  res.send('respond with a resource');
});

module.exports = router;

