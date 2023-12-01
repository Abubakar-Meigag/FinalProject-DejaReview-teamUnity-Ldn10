
const pool = require("../database/db");

const getDataForTable = async (req, res) => {
  console.log("User Object:", req.user);
  try {
    console.log(req);
    if (req.user && req.user.sub) {
      const userId = req.user.sub;

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
