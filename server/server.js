const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
app.use(cors());

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const dotenv = require("dotenv");
dotenv.config();
const { Pool } = require("pg");

const db = new Pool({
  connectionString: process.env.DB_URL,
  ssl: { rejectUnauthorized: false },
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}. Ready to accept requests!`);
});

