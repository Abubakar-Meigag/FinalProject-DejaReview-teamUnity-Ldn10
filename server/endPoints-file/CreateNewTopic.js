const pool = require("../database/db");

const CreateNewTopic = async (req, res) => {
  try {
    const {
        module_id,
        topic_name,
        description,
        reference_link,
        is_user_generated,
    } = req.body;

    if (!module_id || !topic_name || !description || !reference_link || !is_user_generated) {
        return res.status(400).json({ error: "Invalid data" });
    }

    const insertQuery =
      "INSERT INTO topics (module_id, topic_name, description, reference_link, is_user_generated) VALUES ($1, $2, $3, $4, $5) RETURNING *";

    const result = await pool.query(insertQuery, [
        module_id,
        topic_name,
        description,
        reference_link,
        is_user_generated,
    ]);

    res.status(201).json(result.rows[0]);
    console.log(result.rows[0], 'data inserted successfully')
    
  } catch (error) {
    console.log(error.detail);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = CreateNewTopic;