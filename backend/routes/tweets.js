const express = require("express");
const router = express.Router();

let tweets = [];
let tweetId = 1;

// POST /tweets - Permette di pubblicare un nuovo tweet
router.post("/", (req, res) => {
  const { content } = req.body;
  const newTweet = {
    id: tweetId++,
    content: content,
    likes: 0,
  };
  tweets.push(newTweet);
  res.status(201).json(newTweet);
});

// GET /tweets - Ritorna tutti i tweet esistenti
router.get("/", (req, res) => {
  res.status(200).json(tweets);
});

// POST /tweets/:id/like - Incrementa il contatore di "mi piace" per un tweet specifico
router.post("/:id/like", (req, res) => {
  const tweetId = parseInt(req.params.id);
  const tweet = tweets.find((t) => t.id === tweetId);
  if (tweet) {
    tweet.likes++;
    res.status(200).json(tweet);
  } else {
    res.status(404).json({ message: "Tweet not found" });
  }
});

module.exports = router;
