const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies and handle CORS
app.use(cors());
app.use(express.json());

// Variable to store the data
let data = null;

// POST route to handle incoming data
app.post('/api/user', (req, res) => {
    data = req.body; // Store the data received from the client
    console.log('Received data:', data);

    // Send a response back to the client
    res.json({ message: 'Data received successfully', receivedData: data });
});

// GET route to retrieve the stored data
app.get('/api/user', (req, res) => {
    if (data) {
        res.json(data); // Send the stored data
    } else {
        res.status(404).json({ message: 'No data found' }); // Handle the case where no data is stored
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
