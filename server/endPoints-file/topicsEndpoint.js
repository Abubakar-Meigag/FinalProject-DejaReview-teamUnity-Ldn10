const pool = require("../database/db");

const getTopics = async (req, res) => {
  const query = "SELECT * FROM topics";
  try {
    const data = await pool.query(query);
    res.status(200).json(data.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      result: "failure",
      message: "No data found",
    });
  }
};

module.exports = {
  getTopics,
};
