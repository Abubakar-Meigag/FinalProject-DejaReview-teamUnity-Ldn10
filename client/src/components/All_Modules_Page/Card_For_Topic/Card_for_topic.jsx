import React from "react";
import "./card.css";

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
          <h2>{topic.nameOfTopic}</h2>
          <p>{topic.details}</p>
        </div>
      </div>
    )
  );
}
