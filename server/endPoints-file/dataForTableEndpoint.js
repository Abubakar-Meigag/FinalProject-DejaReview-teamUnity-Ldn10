const pool = require("../database/db");

const getDataForTable = async (req, res) => {
  try {
    if (req.query && req.query.sub) {
      const userId = req.query.sub;

      const query = `
      SELECT
        ltt.id AS entry_id,
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
      ORDER BY ltt.due_date ASC
    `;

      const { rows } = await pool.query(query, [userId]);

      const currentDate = new Date();

      const updatedRows = rows.map((row) => {
        const { due_date, reviews_remaining } = row;

        let updatedDueDate = new Date(due_date);

        if (reviews_remaining === 0) {
          return null;
        } else if (reviews_remaining === 1) {
          updatedDueDate.setDate(currentDate.getDate() + 180);
        } else if (reviews_remaining === 2) {
          updatedDueDate.setDate(currentDate.getDate() + 90);
        } else {
          updatedDueDate.setDate(currentDate.getDate() + 30);
        }

        return {
          ...row,
          due_date: updatedDueDate,
        };
      });

      const filteredRows = updatedRows.filter((row) => row !== null);

      res.json({ modules: filteredRows });
    } else {
      res.status(401).json({ error: "User not authenticated" });
    }
  } catch (error) {
    console.error("Error fetching modules:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = getDataForTable;
