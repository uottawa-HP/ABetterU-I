var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/resources', function(req, res, next) {
  res.send('made change');
});

module.exports = router;
