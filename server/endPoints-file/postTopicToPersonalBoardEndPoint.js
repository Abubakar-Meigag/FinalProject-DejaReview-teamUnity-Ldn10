const pool = require("../database/db");

const postTopicToPersonalBoard = async (req, res) => {
  const { topicId, userId } = req.body;
  const query = `INSERT INTO learning_topics_tracker (topic_id, user_id) VALUES ($1, $2)`;

  try {
    const request = await pool.query(query, [topicId, userId]);
    const insertedRow = request.rows[0];
    return res.status(201).json(insertedRow);
  } catch (error) {
    console.log(
      "The ERROR occured in server//postTopicToPersonalBoard and ERROR is:",
      error
    );
    res.status(500).json({
      error: "An error occurred while POST the topic to personal board",
    });
  }
};

module.exports = postTopicToPersonalBoard;
