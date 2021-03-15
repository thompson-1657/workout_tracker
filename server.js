const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require('path');


const PORT = process.env.PORT || 8080

const db = require("./models");

const app = express();


app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout',
    {useNewUrlParser: true, useUnifiedTopology: true}
  );

  app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/exercise.html"));
});

app.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/stats.html"));
});







app.listen(PORT, () => {
    console.log(`Running on localhost:${PORT}!`);
});

