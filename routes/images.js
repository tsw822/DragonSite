var express = require('express');
var router = express.Router();

/* GET Images page. */
router.get('/', function(req, res, next) {
  res.render('images');
});

module.exports = router;