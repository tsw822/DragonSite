var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/*GET feedback page.*/
router.get('/feedback', function(req, res, next) {
  res.render('feedback');
});


module.exports = router;
