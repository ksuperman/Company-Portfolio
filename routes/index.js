var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/big_data.ejs', function(req, res, next) {
  res.render('big_data', { title: 'Big Data' });
});

module.exports = router;
