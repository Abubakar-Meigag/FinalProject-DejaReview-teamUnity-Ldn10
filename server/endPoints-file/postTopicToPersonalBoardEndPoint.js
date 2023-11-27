app.post("/allModulesPage", postTopicToPB);

const db = require("../database/db");

const postTopicToPersonalBoard = async (req, res) => {
  console.cog("request body from user to server", req.body);

  const { topicId, useId } = req.body;
  console.cog("topicId and userId", topicId, useId);
  const query = `INSERT INTO learning_topics_tracker (topic_id, user_id,) VALUES ($1, $2)`;

  try {
    const request = await db.json(query, [topicId, useId]);
    const requestRows = request.rows;
    return res.status(201).json(requestRows);
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
