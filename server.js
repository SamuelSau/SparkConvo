const express = require('express');
const app = express();
const userRoutes = require('./Routes/userRoutes');
const messagesRoutes = require('./Routes/messagesRoutes');
const cors = require('cors');

// Parse incoming requests with JSON payloads
app.use(express.json());
app.use(cors());

//Routes
app.use('/api/users', userRoutes);
app.use('/api/messages', messagesRoutes);


// Start the server on port 3000
app.listen(3000, () => {
	console.log('Server started on port 3000');
});
