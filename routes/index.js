// https://scotch.io/tutorials/use-ejs-to-template-your-node-application

var express = require('express');
var router = express.Router();

var fs = require('fs');

var obj = {};


/*
var db = new sqlite3.Database('abcd');

db.serialize(function() {
	db.run("CREATE TABLE user (id INT, dt TEXT)");
	var stmt = db.prepare("INSERT INTO user VALUES (?,?)");
	for (var i = 0; i < 10; i++) {
		var d = new Date();
		var n = d.toLocaleTimeString();
		stmt.run(i, n);
	}
	stmt.finalize();
	db.each("SELECT id, dt FROM user", function(err, row) {
		console.log("User id: " + row.id, row.dt);
	});
});
*/


/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/

router.get('/', function(req, res, next) {
	var drinks = [
		{name: 'Bloody Mary', drunk: 3}, 
		{name: 'Martini', drunk: 5},
		{name: 'Scotch', drunk: 10} 
	];
	var tagline = "Any code of your own that you haven't looked at for six or more months might as well have been written by someone else."
  res.render('pages/index', { title: 'Index', drinks: drinks, tagline: tagline });
});

router.get('/about', function(req, res, next) {
  fs.readdir('/home/ruby/', (err, files) => {
    res.render('pages/about', { title: 'About', files: files });
  });
});

router.get('/data', function(req, res, next) {

	// http://www.w3resource.com/node.js/nodejs-sqlite.php
	var sqlite3 = require('sqlite3').verbose();
	var file = "abcd";
	var db = new sqlite3.Database(file);
	db.all("SELECT id, dt FROM user", function(err, rows) {
		rows.forEach(function(row) {
			console.log(row.id, row.dt);
		});
	});
	db.close();

  //fs.readdir('/home/ruby/', (err, files) => {
    res.render('pages/data', { title: 'Data', files: files });
  //});
});

/*
router.get('/data', function(req, res, next) {
	connection.query('SELECT * FROM test', function(err, result) {
		if (err) {
			throw err;
		} else {
			obj = {print: result};
			res.render('print', obj);
		}
	});
});
*/

/*
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});
*/

module.exports = router;
