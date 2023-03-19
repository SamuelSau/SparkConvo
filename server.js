const express = require('express');
const app = express();

//MOCKUP FOR USERS RESOURCE

const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Bob' },
  ];

// Define a GET endpoint at the root URL
app.get('/', (req, res) => {
	res.send('Hello, World!');
});

// GET endpoint to return a list of all users
app.get('/api/users', (req, res) => {
	res.send(users);
});

// GET endpoint to return information about a specific user
app.get('/api/users/:id', (req, res) => {
	const user = users.find((u) => u.id === parseInt(req.params.id));
	if (!user) return res.status(404).send('User not found');
	res.send(user);
});

// PUT endpoint to update information about a specific user
app.put('/api/users/:id', (req, res) => {
	const user = users.find((u) => u.id === parseInt(req.params.id));
	if (!user) return res.status(404).send('User not found');
	user.name = req.body.name;
	res.send(user);
});

// DELETE endpoint to delete a specific user
app.delete('/api/users/:id', (req, res) => {
	const user = users.find((u) => u.id === parseInt(req.params.id));
	if (!user) return res.status(404).send('User not found');
	const index = users.indexOf(user);
	users.splice(index, 1);
	res.send(user);
});

// Start the server on port 3000
app.listen(3000, () => {
	console.log('Server started on port 3000');
});
