var express = require('express');
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var passport = require('passport');
var app = express();

mongoose.connect('mongodb://localhost/trackbuddy');

app.use(express.static(__dirname + '/public'));

app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));  // parse application/vnd.api+json as json
app.use(methodOverride());
app.use(passport.initialize());

// Routes
// -------------------------------------------------------------------------------
require('./app/routes.js')(app);
require('./models/Users');
require('./config/passport');

app.listen(8000, function(){
  console.log("Listening on port >>> 8000");
});
