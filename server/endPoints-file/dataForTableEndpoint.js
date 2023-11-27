const pool = require("../database/db");

const getDataForTable = async (req, res) => {
  try {
    const query = `
      SELECT
        modules.name,
        topics.topic_name,
        topics.reference_link
      FROM
        modules
      JOIN
        topics ON modules.id = topics.module_id
    `;

    const { rows } = await pool.query(query);
    res.json({ modules: rows });
  } catch (error) {
    console.error("Error fetching modules:", error);
    res.status(500).json({ error: "Internal Server Error" });
    pool.end();
  }
};

module.exports = getDataForTable;
