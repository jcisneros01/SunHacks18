//=========================
// Set up
//==========================
var express = require("express");
var app = express();
var path = require('path');
var passport = require("passport")
var LocalStrategy = require("passport-local");
var passportLocalMongoose = require("passport-local-mongoose");

app.set('port', 3000); // set port
app.use(express.static(__dirname + '/public')); // static files
app.set("view engine", "ejs");

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//==========================
// Routes
//==========================
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});


app.get('/concerts/:location', function(req, res) {
	console.log(req.params.location);
	res.send(req.params.location);      
});

//==========================
// Error Handling routes
//==========================
app.use(function(req,res){
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500);
  res.render('500');
});

//==========================
// Start server
//==========================
app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});
