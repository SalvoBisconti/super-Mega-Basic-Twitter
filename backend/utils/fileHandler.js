const fs = require("fs-extra");
const path = require("path");

const FILE_PATH = path.join(__dirname, "..", "tweets.json");

// CARICA I TWEET DAL FILE
const loadTweets = async () => {
  try {
    const data = await fs.readFile(FILE_PATH, "utf8");
    return JSON.parse(data);
  } catch (error) {
    if (error.code === "ENOENT") {
      return [];
    }
    throw error;
  }
};

// SALVA I TWEET NEL FILE
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
