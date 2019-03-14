'use strict';

var mongoose = require('mongoose'),
  
  Channel = mongoose.model('Channel');

  exports.list_all_channels = function(req, res) {
    Channel.find({}, function(err, channel) {
      if (err)
        res.send(err);
      res.json(channel);
    });
  };

  exports.create = function(req, res) {
    
    var c = new Channel(req.body);

    c.save(function(err, channel) {
        if (err) {
          return res.status(400).send({
            message: err
          });
        } else {
          return res.json(channel);
        }
      });
  };