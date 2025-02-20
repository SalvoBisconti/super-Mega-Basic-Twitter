const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const tweetRoutes = require("./routes/tweets");

const app = express();
const PORT = 3001;

const corsOptions = {
  origin: "https://super-mega-basic-twitter.vercel.app", // DOMINIO FRONT END
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions)); // USA IL MIDDLEWARE CORS PER OVVIARE AL PROBLEMA DELLA PORTA DIVERSA TRA BACK E FRONT END
app.use(bodyParser.json());
app.use("/tweets", tweetRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
