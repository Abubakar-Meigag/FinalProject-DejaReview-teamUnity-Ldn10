import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Card_for_topic.css";

export default function CardForTopic({ isOpen, onClose, topic, onReview }) {
  const { user } = useAuth0();

  const [topicData, setTopicData] = useState({
    topicId: topic.topic_id,
    userId: user.sub,
  });
  useEffect(() => {
    setTopicData({
      topicId: topic.topic_id,
      userId: user.sub,
    });
  }, [topic, user.sub]);

  async function handleAddingTopic() {
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
      const json = await request.json();
      console.log("handleAddingTopic json:", json);
      alert("Topic added on Dashboard successfully");
    } catch (error) {
      console.log(console.log("handleAddingTopic error:", error));
    }
  }
  if (!isOpen) return null;

  const handleReview = () => {
    handleAddingTopic();
    onClose();
  };

  return (
    <div onClick={onClose} className="selected-topic">
      <div className="relative p-4 w-full max-w-4xl max-h-full">
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative bg-white rounded-lg shadow dark:bg-blue-500"
        >
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {topic.topic_name}
            </h3>
            <button
              onClick={onClose}
              className="bg-blue-600 hover:bg-gray-200 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600"
              data-modal-hide="default-modal"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="#ff8c2e"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-4 md:p-5 space-y-4">
            <p className="text-normal leading-relaxed text-white">
              {topic.topic_description}
            </p>
            <a
              href={topic.reference_link}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-8"
            >
              More about this topic
            </a>
          </div>
          <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button
              onClick={() => handleReview(topic)}
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add topic
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
