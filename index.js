const express = require("express");
const connectDB = require("./config/db");
const { uploadSong , singleSong , fetchSong } = require('./controller/uploadController');
const bodyParser = require('body-parser');
const cors = require('cors');

connectDB();
const app = express();
app.use(bodyParser.json({ limit: '1000mb' }));
app.use(bodyParser.urlencoded({ limit: '1000mb', extended: true }));
app.use(cors()); // allow front api's
app.use(express.json()); // to accept json data


  app.post("/api/upload/uploadSong",uploadSong);
  app.get("/api/get/fetchSong",fetchSong)
  app.get("/api/get/singleSong",singleSong)


  app.get("/", (req, res) => {
    res.send("API is running..");
  });




const PORT = 4000;

app.listen(
  PORT,
  console.log(`Server running on PORT ${PORT}...`)
);
