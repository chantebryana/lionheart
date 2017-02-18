var express = require('express');
var router = express.Router();

var fs = require('fs');

/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/

router.get('/', function(req, res, next) {
  res.render('pages/index', { title: 'Index' });
});

router.get('/about', function(req, res, next) {
  fs.readdir('/home/ruby/', (err, files) => {
    res.render('pages/about', { title: 'About', files: files });
  });
});

/*
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});
*/

module.exports = router;
