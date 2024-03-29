const pool = require("../database/db");

const dataForUpComingTopic = async (req, res) => {
  try {
    if (req.query && req.query.sub) {
      const userId = req.query.sub;

      const query = `
      SELECT
        ltt.id AS entry_id,
        modules.name AS module_name,
        topics.topic_name,
        topics.reference_link,
        ltt.due_date
      FROM
        learning_topics_tracker ltt
      JOIN
        topics ON ltt.topic_id = topics.id
      JOIN
        modules ON topics.module_id = modules.id
      WHERE 
        ltt.user_id = $1
        LIMIT 3
    `;

      const data = await pool.query(query, [userId]);
      res.json(data.rows);
    } else {
      res.status(401).json({ error: "User not authenticated" });
    }
  } catch (error) {
    console.error("Error fetching dataForUpComingTopic:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = dataForUpComingTopic;
