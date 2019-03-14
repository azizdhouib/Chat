'use strict';

var mongoose = require('mongoose'),
  
  Message = mongoose.model('Message');

  exports.create = function(req, res) {
    
    var m = new Message(req.body);
    
    m.save(function(err, message) {
      if (err) {
        return res.status(400).send({
          message: err
        });
      } else {
        return res.json(message);
      }
    });
  };

  exports.list_messages = function(req, res) {
    Message.find({'channel': req.query.id}, function(err, message) {
      if (err)
        res.send(err);
      res.json(message)
    });
  };

  exports.loginRequired = function(req, res, next) {
    if (req.user) {
      next();
    } else {
      return res.status(401).json({ message: 'Unauthorized user!' });
    }
  };