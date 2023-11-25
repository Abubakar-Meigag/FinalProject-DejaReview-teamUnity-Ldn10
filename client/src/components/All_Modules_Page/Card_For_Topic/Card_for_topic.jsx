import React from "react";
import "./Card_for_topic.css";

export default function CardForTopic({ topic, showTopic, toggleTopic }) {
  const handleCloseClick = (e) => {
    // Stop the event propagation when the "close btn" is clicked
    e.stopPropagation();
    toggleTopic();
  };

  return (
    showTopic && (
      <div className="selected-topic-container" onClick={toggleTopic}>
        <div
          className="selected-topic-card"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="close-topic-card-button"
            onClick={handleCloseClick}
          >
            close btn
          </button>
          <h2>{topic.topic_name}</h2>
          <p>{topic.topic_description}</p>
          <h6>{topic.reference_link}</h6>
          <h6>{topic.test_link}</h6>
        </div>
      </div>
    )
  );
}
