const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = 8080

const app = express();


app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout',
    {useNewUrlParser: true, useUnifiedTopology: true}
  );

app.listen(PORT, () => {
    console.log(`Running on localhost:${PORT}!`);
});