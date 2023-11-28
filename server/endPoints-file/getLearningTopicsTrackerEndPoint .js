const pool = require("../database/db");

const getLearningTopicsTrackerEndPoint = async (req, res) => {
  const query = "SELECT * FROM learning_topics_tracker";
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

module.exports = getLearningTopicsTrackerEndPoint;
