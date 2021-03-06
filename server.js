// this is going to be the core of the api.
// server.js


var express = require('express'),
  cors = require('cors'),
  app = express(),
  port = process.env.PORT || 3000;
  mongoose = require('mongoose'),
  bodyParser = require('body-parser');

// load cors thing
app.use(cors());

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://APIuser1:Admin123@ds045614.mlab.com:45614/api-learning-db');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());


var routes = require('./api/routes/routes'); //importing route
routes(app); //register the route

app.listen(port);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});


console.log('todo list RESTful API server started on: ' + port);
