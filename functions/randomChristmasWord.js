const christmasWords = [
    "Santa", "Reindeer", "Gifts", "Christmas Tree",
    "Snowflake", "Mistletoe", "Jingle Bells", "Candy Cane",
    "Frosty", "Sleigh", "Stockings", "Gingerbread", "Joy", "Peace", "Joy", "Jesus", "Nativity", "Turkey"
];

exports.handler = async () => {
    const randomIndex = Math.floor(Math.random() * christmasWords.length);
    const randomChristmasWord = christmasWords[randomIndex];

    return {
        statusCode: 200,
        body: JSON.stringify({ random_word: randomChristmasWord }),
        headers: {
            'Content-Type': 'application/json'
        }
    };
};
