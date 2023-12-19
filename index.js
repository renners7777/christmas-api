const express = require('express');
const app = express();
const port = 3000; // You can use any port you prefer

// List of Christmas-related words
const christmasWords = [
    "Santa", "Reindeer", "Gifts", "Christmas Tree",
    "Snowflake", "Mistletoe", "Jingle Bells", "Candy Cane",
    "Frosty", "Sleigh", "Stockings", "Gingerbread", "Joy", "Peace"
];

// Endpoint to get a random word
app.get('/random_word', (req, res) => {
    const randomIndex = Math.floor(Math.random() * christmasWords.length);
    const randomChristmasWord = christmasWords[randomIndex];
    res.json({ random_word: randomChristmasWord });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
