const express = require('express');
const mongoose = require('mongoose');

// Require the User model from the user.js file
const User = require('./user');

// Create an Express app
const app = express();

// MongoDB connection URI
const uri = 'mongodb://192.168.29.246:27017/mydatabase'; // Replace with your MongoDB URI and database name

// Connect to MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(error => console.error('Error connecting to MongoDB:', error));

// Define a route to handle GET requests
app.get('/users', async (req, res) => {
    try {
        // Fetch all users from MongoDB
        const users = await User.find();
        
        // Return the fetched users as the API response
        res.json(users);
    } catch (error) {
        // If an error occurs, send an error response
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Start the Express server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
