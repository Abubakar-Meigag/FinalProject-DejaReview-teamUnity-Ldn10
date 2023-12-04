const pool = require("../database/db");

const getNewPersonalTopicToDB = async (req, res) => {
  try {
    const isUserGenerated = req.query.is_user_generated;
    const userId = req.query.sub;

    if (isUserGenerated !== true) {
      return res.status(400).json({ error: "Invalid is_user_generated value" });
    }

    const checkUserTopicQuery =
      "SELECT * FROM topics WHERE is_user_generated = true AND user_id = $1";

    const checkUserTopicResult = await pool.query(checkUserTopicQuery, [
      userId,
    ]);

    if (checkUserTopicResult.rows.length === 0) {
      return res.status(404).json({ error: "User-generated topic not found" });
    }

    const insertQuery =
      "INSERT INTO learning_topics_tracker (topic_id, user_id, due_date) VALUES ($1, $2, CURRENT_DATE + 7)";

    await pool.query(insertQuery, [topicId, userId]);

    return res.status(201).json({ success: true });
  } catch (error) {
    console.error("An error occurred in getNewPersonalTopicToDB:", error);
    res.status(500).json({
      error: "An error occurred while processing the personal topic request",
    });
  }
};

module.exports = getNewPersonalTopicToDB;
