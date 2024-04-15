const pool = require("../database/db");

const deleteTopic = async (req, res) => {
  const topicID = req.params.topicID;

  try {
    const query = "DELETE FROM learning_topics_tracker WHERE id = $1";
    const result = await pool.query(query, [topicID]);

    if (result.rowCount === 1) {
      return res.status(201).json({ success: true });
    } else {
      return res.status(404).json({
        error: {
          result: "failure",
          message: "Topic could not be deleted",
        },
      });
    }
  } catch (error) {
    console.error("Error deleting record:", error);
    res
      .status(500)
      .json({ error: "An error occurred while deleting the record" });
  }
};
module.exports = deleteTopic;
