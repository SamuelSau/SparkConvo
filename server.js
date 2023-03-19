const express = require('express');
const app = express();
const userRoutes = require('./Routes/userRoutes');

// Parse incoming requests with JSON payloads
app.use(express.json());

//Routes
app.use('/api/users', userRoutes);

// Start the server on port 3000
app.listen(3000, () => {
	console.log('Server started on port 3000');
});
