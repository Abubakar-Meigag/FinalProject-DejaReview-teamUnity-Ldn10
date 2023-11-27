import React, { useState } from "react";
import "./Card_for_topic.css";

export default function CardForTopic({ topic, showTopic, toggleTopic }) {
  const [topicData, setTopicData] = useState({
    topicId: topic.topic_id,
    userId: 222,
  });

  async function handleAddingTopic() {
    console.log(topicData);
    try {
      const request = await fetch(
        `https://deja-review-backend.onrender.com/allModulesPage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json", // Set the content type to JSON
          },
          body: JSON.stringify(topicData),
        }
      );
      console.log("handleSubmit response:", request);

      const json = await request.json();
      console.log("handleAddingTopic json:", json);
    } catch (error) {
      console.log(console.log("handleAddingTopic error:", error));
    }
  }

  return (
    showTopic && (
      <div
        className="selected-topic-container"
        id={topic.id}
        onClick={toggleTopic}
      >
        <div
          className="selected-topic-card"
          onClick={(e) => e.stopPropagation()}
        >
          <button className="all_topics-card-button close-topic">
            close btn
          </button>
          <h2>{topic.topic_name}</h2>
          <p>{topic.topic_description}</p>
          <h6>{topic.reference_link}</h6>
          <h6>{topic.test_link}</h6>
          <button
            className="all_topics-card-button add_topic-button "
            onClick={handleAddingTopic}
          >
            ADD TOPIC TO YOUR BOARD
          </button>
        </div>
      </div>
    )
  );
}
