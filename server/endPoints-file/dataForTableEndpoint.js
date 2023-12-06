const pool = require("../database/db");

const getDataForTable = async (req, res) => {
  try {
    if (req.query && req.query.sub) {
      const userId = req.query.sub;

      const query = `
      SELECT
        ltt.id AS entry_id,
        ltt.task_status,
        modules.name AS module_name,
        topics.topic_name,
        topics.reference_link,
        topics.description,
        ltt.due_date
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
    `;

      const { rows } = await pool.query(query, [userId]);
      res.json({ modules: rows });
    } else {
      res.status(401).json({ error: "User not authenticated" });
    }
  } catch (error) {
    console.error("Error fetching modules:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = getDataForTable;
