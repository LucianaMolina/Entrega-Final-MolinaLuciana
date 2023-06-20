const express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/',async function(req, res, next) {
  res.render('comoadoptar',{title: 'Express' });
});
module.exports = router;