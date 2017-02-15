var express = require('express')
var app = express()
// respond with HELLO WORLD! on the homepage
app.get('/', function(req, res) {
	res.send('Hello World!')
})

// prints to terminal when web page is opened
app.listen(3000, function () {
	console.log('Example app listening on port 3000!')
})

// respond to POST request on the root route (/), the application's home page
app.post('/', function(req, res) {
	res.send('Got a POST request')
})

// respond to a PUT request to the /user route
app.put('/user', function(req, res) {
	res.send('Got a PUT request at /user')
})

// respond to a DELETE request to the /user route
app.delete('/user', function (req, res) {
	res.send('Got a DELETE request at /user')
})

//app.use(express.static('public'))

