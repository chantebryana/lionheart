// https://scotch.io/tutorials/use-ejs-to-template-your-node-application
// server.js (instead of index.js i guess)
// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
	res.render('pages/index');
});

// about page
app.get('/about', function(req, res) {
	res.render('pages/about');
});

// post page
app.post('/test', test.post);

app.listen(8080);
console.log('8080 is the magic port');

