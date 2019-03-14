'use strict';

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  User = require('./users/user.model'),
  Channel = require('./users/channel.model'),
  message = require('./users/message.model'),
  bodyParser = require('body-parser'),
  jsonwebtoken = require("jsonwebtoken");

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://aziz:Passw0rd@cluster0-9wzps.mongodb.net/test?retryWrites=true',  { useCreateIndex: true, useNewUrlParser: true });


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
    jsonwebtoken.verify(req.headers.authorization.split(' ')[1], 'secret', function(err, decode) {
      if (err) req.user = undefined;
      req.user = decode;
      next();
    });
  } else {
    req.user = undefined;
    next();
  }
});
var routes = require('./routes/routes');
routes(app);

app.use(function(req, res) {
  res.status(404).send({ url: req.originalUrl + ' not found' })
});

app.listen(port);

console.log('API server started on: ' + port);

module.exports = app;