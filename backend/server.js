const express = require("express");
const bodyParser = require("body-parser");
const tweetsRouter = require("./routes/tweets");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use("/tweets", tweetsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
