'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ChannelSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    }
});

mongoose.model('Channel', ChannelSchema);