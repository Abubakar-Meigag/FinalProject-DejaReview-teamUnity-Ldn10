require("dotenv").config();
const express = require("express");
const app = express();

const cors = require("cors");
const port = process.env.PORT || 5005;
const pool = require("./database/db");
const bodyParser = require("body-parser");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
pool.connect();

app.listen(port, () => {
  console.log(`Server is running on Port: ${port}`);
});


app.get("/", (req, res) => {
  res.send(`Welcome to Final Project server on port  ${port}`);
});


const getDataTest = require("./endPoints-file/testEndPoint");

app.get("/test", getDataTest);

const getDataUsers = require("./endPoints-file/usersEndPoint");

app.get("/users", getDataUsers);

const getTopics = require("./endPoints-file/topicsEndpoint");

app.get("/topics", getTopics);


