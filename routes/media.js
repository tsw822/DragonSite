var express = require('express');
var router = express.Router();

/* GET Media page. */
router.get('/', function(req, res, next) {
  res.render('media');
});

module.exports = router;