const pool = require("../database/db");

const getDataForTable = async (req, res) => {
  if (req.query.sub) {
    try {
      const userId = req.query.sub;
      const query = `
      SELECT
        ltt.id AS entry_id,
        ltt.task_status,
        modules.name AS module_name,
        topics.topic_name,
        topics.reference_link,
        topics.description,
        ltt.due_date,
        ltt.reviews_remaining,
        ltt.task_status
      FROM
        learning_topics_tracker ltt
      JOIN
        topics ON ltt.topic_id = topics.id
      JOIN
        modules ON topics.module_id = modules.id
      WHERE 
        ltt.user_id = $1
      AND 
      ltt.task_status = 0
      ORDER BY ltt.due_date ASC
    `;

      const { rows } = await pool.query(query, [userId]);
      res.json(rows);
    } catch (error) {
      console.error("Error fetching getDataForTable:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(401).json({ error: "User not authenticated" });
  }
};

module.exports = getDataForTable;
