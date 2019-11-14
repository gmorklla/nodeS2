var express = require('express');
var router = express.Router();
var path = require('path');

router.all('/*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  res.header('Access-Control-Allow-Headers', 'Content-Type, responseType');
  next();
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.sendFile(path.resolve('./public/files/otro.pdf'));
});

module.exports = router;
