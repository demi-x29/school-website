const express = require('express');
const router = express.Router();

// Define a route for the home page
router.get('/', (req, res) => {
    res.sendFile('index.html', { root: 'public' });
});

// Define other routes as needed
// Example: router.get('/about', (req, res) => { ... });

module.exports = router;