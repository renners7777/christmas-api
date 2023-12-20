const express = require('express');
const app = express();
const port = 3000; // You can use any port you prefer
app.use(express.static('public'))

// Enable CORS for all routes (Allow font loading from specified origin)
app.use((req, res, next) => {
    res.setHeader('Content-Security-Policy', "default-src 'self'; font-src https://christmas-api.netlify.app;");
    next();
});


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // or specify your domain
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// List of Christmas-related words
const christmasWords = [
    "Santa", "Reindeer", "Gifts", "Christmas Tree",
    "Snowflake", "Mistletoe", "Jingle Bells", "Candy Cane",
    "Frosty", "Sleigh", "Stockings", "Gingerbread", "Joy", "Peace", "Joy", "Jesus", "Nativity", "Turkey"
];

// Endpoint to get a random word
app.get('https://christmas-api.netlify.app/.netlify/functions/randomChristmasWord', (req, res) => {
    const randomIndex = Math.floor(Math.random() * christmasWords.length);
    const randomChristmasWord = christmasWords[randomIndex];
    res.json({ random_word: randomChristmasWord });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
