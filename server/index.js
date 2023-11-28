require("dotenv").config();
const express = require("express");
const app = express();

const cors = require("cors");
const port = process.env.PORT || 5005;
const pool = require("./database/db");
const bodyParser = require("body-parser");

const corsOptions = {
  origin: function (origin, callback) {
    const allowedOrigins = [
      "http://localhost:3002",
      "https://fp-deja-review-frontend.onrender.com",
    ];
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
  credentials: true,
};

app.use(cors(corsOptions));
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

const getDataModules = require("./endPoints-file/testEndPoint");
const getDataUsers = require("./endPoints-file/usersEndPoint");
const getTopics = require("./endPoints-file/topicsEndpoint");
const getDataForAllModulesPage = require("./endPoints-file/all_modules_pageEndPoint");
const storeUserInfo = require("./endPoints-file/storeUserInfoToDB")

app.get("/modules", getDataModules);
app.get("/users", getDataUsers);
app.get("/topics", getTopics);
app.get("/allModulesPage", getDataForAllModulesPage);
app.post("/storeUserInfo", storeUserInfo);
