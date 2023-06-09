const mongoose = require('mongoose');
require('dotenv').config();
const User = require('../Models/user');

mongoose
	.connect(process.env.DB_CONNECTION, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log('Connected to MongoDB');

	})
	.catch((err) => {
		console.error('Error connecting to MongoDB:', err.message);
	});
