'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MessageSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    channel: {
        type: Schema.Types.ObjectId, 
        ref: 'Channel',
        required : true
    },
    user: {
      type: Schema.Types.ObjectId, 
      ref: 'User',
      required : true
  }
          
    
});

mongoose.model('Message', MessageSchema);