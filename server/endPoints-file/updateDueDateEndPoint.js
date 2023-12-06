const pool = require("../database/db");

const updateDueDate = async (req, res) => {
  try {
    const { topicId } = req.body;

    const getDueDateQuery =
      "SELECT due_date, reviews_remaining FROM learning_topics_tracker WHERE id = $1";
    const { rows } = await pool.query(getDueDateQuery, [topicId]);

    if (rows.length === 0) {
      return res.status(404).json({ success: false, error: "Topic not found" });
    }

    const currentDueDate = new Date(rows[0].due_date);
    const currentDate = new Date();
    let updatedDueDate = new Date(currentDueDate);

    const updatedReviewsRemaining = rows[0].reviews_remaining - 1;

    if (updatedReviewsRemaining === 0) {
      updatedDueDate.setDate(currentDate.getDate() + 180); 
    } else if (updatedReviewsRemaining === 1) {
      updatedDueDate.setDate(currentDate.getDate() + 90); 
    } else {
      updatedDueDate.setDate(currentDate.getDate() + 30); 
    }

    const updateDueDateQuery =
      "UPDATE learning_topics_tracker SET due_date = $1, reviews_remaining = $2 WHERE id = $3";

    await pool.query(updateDueDateQuery, [
      updatedDueDate,
      updatedReviewsRemaining,
      topicId,
    ]);

    res.json({
      success: true,
      message: "Due date and reviews_remaining updated successfully",
    });
  } catch (error) {
    console.error("Error updating due date:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};

module.exports = updateDueDate;
