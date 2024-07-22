const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const tweetRoutes = require("./routes/tweets");

const app = express();
const PORT = 3001;

app.use(cors()); // Usa il middleware cors
app.use(bodyParser.json());
app.use("/tweets", tweetRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
