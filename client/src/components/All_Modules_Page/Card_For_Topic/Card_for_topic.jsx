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
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="w-full max-w-[570px] rounded-[20px] bg-mypurple py-12 px-8 text-center md:py-[60px] md:px-[70px]">
        <h3 className="text-white pb-2 text-xl font-bold sm:text-2xl">
          {topic.topic_name}
        </h3>
        <span className="bg-base-100 mx-auto mb-6 inline-block h-1 w-[90px] rounded"></span>
        <p className="text-mycream mb-10 text-base leading-relaxed">
          {topic.topic_description}
        </p>
        <p className="text-base-100 mb-10 text-base leading-relaxed">
          <a
            href={topic.reference_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            More info
          </a>
        </p>
        <div className="flex flex-wrap gap-4">
          <div className="flex-1">
            <button
              className="bg-myturquoise whitespace-nowrap  block w-full rounded-lg border p-3 text-center text-base font-medium text-white transition hover:bg-opacity-90"
              onClick={() => handleReview(topic)}
            >
              Add topic
            </button>
          </div>
          <div className="flex-1">
            <button
              className="text-gray-900 block w-full rounded-lg border border-gray-200 p-3 text-center text-base font-medium transition hover:bg-coral hover:text-white"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
