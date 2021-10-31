module.exports = function(app) {
	
	var userHandlers = require('../controllers/user.controller');

	// todoList Routes
	app.route('/profile')
		.get(userHandlers.loginRequired, userHandlers.profile);


	app.route('/auth/register')
		.post(userHandlers.register);

	app.route('/auth/sign_in')
		.post(userHandlers.sign_in);
};