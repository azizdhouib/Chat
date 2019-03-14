
'use strict';
module.exports = function(app) {
    var channelHandlers = require('../users/channel.controller.js');
    var userHandlers = require('../users/users.controller.js');
    var messageHandlers = require('../users/message.controller.js');
    
	app.route('/auth/register')
		.post(userHandlers.register);

	app.route('/auth/sign_in')
        .post(userHandlers.sign_in);

    app.route('/auth/chat')
        .post(messageHandlers.loginRequired, channelHandlers.create)
        .get(messageHandlers.loginRequired, channelHandlers.list_all_channels);
    
    app.route('/auth/message')
        .post(messageHandlers.loginRequired, messageHandlers.create)
        .get(messageHandlers.loginRequired, messageHandlers.list_messages);        
};
