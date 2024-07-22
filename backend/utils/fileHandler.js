const fs = require("fs-extra");
const path = require("path");

const FILE_PATH = path.join(__dirname, "..", "tweets.json");

// Carica i tweet dal file
const loadTweets = async () => {
  try {
    const data = await fs.readFile(FILE_PATH, "utf8");
    return JSON.parse(data);
  } catch (error) {
    if (error.code === "ENOENT") {
      // Se il file non esiste, ritorna un array vuoto
      return [];
    }
    throw error;
  }
};

// Salva i tweet nel file
const saveTweets = async (tweets) => {
  try {
    await fs.writeFile(FILE_PATH, JSON.stringify(tweets, null, 2));
  } catch (error) {
    console.error("Error saving tweets:", error);
  }
};

module.exports = {
  loadTweets,
  saveTweets,
};
