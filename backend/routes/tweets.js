const express = require("express");
const router = express.Router();
const { loadTweets, saveTweets } = require("../utils/fileHandler");

let tweets = [];
let tweetId = 1;

// POST /tweets - AGGIUNGE UN TWEET
router.post("/", async (req, res) => {
  const { content, user, likes } = req.body;
  const newTweet = {
    id: tweetId++,
    content: content,
    user: user,
    likes: likes,
  };
  tweets.push(newTweet);
  await saveTweets(tweets);
  res.status(201).json(newTweet);
});

// GET /tweets - RESTITUISCE I TWEET
router.get("/", (req, res) => {
  res.status(200).json(tweets);
});

// POST /tweets/:id/like - INCREMENTA I NUMERO DI LIKE DOPO AVER VERIFICATO CHE IL L'ID DEL TWEET SI TROVA NELL'ARRAY
router.post("/:id/like", async (req, res) => {
  try {
    const tweetId = parseInt(req.params.id, 10);
    const tweet = tweets.find((t) => t.id === tweetId);

    if (tweet) {
      tweet.likes++;
      await saveTweets(tweets);
      res.status(200).json(tweet);
    } else {
      res.status(404).json({ message: "Tweet not found" });
    }
  } catch (error) {
    console.error("Error liking tweet:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
