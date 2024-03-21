import { useSession } from "@supabase/auth-helpers-react";
import React, { useState, useEffect } from "react";
import "./Card_for_topic.css";

export default function CardForTopic({ isOpen, onClose, topic, onReview }) {
  const session = useSession();
  const userID = session.user.id;

  const [topicData, setTopicData] = useState({
    topicId: topic.topic_id,
    userId: userID,
  });

  useEffect(() => {
    setTopicData({
      topicId: topic.topic_id,
      userId: userID,
    });
  }, [topic, userID]);

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
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer">
      <div className="w-full max-w-[570px] rounded-[20px] bg-[#096b23] py-12 px-8 text-center md:py-[60px] md:px-[70px]">
        <h3 className="text-secondary pb-2 text-xl font-bold sm:text-2xl cursor-pointer">
          {topic.topic_name}
        </h3>
        <span className="bg-base-100 mx-auto mb-6 inline-block h-1 w-[90px] rounded"></span>
        <p className="text-secondary mb-10 text-base leading-relaxed">
          {topic.topic_description}
        </p>
        <p className="text-base-100 hover:text-lightBlue mb-10 text-base leading-relaxed">
          <a
            href={topic.reference_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            More info
          </a>
        </p>
        <div className="flex flex-wrap gap-4 sm:text-center">
          <div className="flex-1">
            <button
              className="bg-greenIcons whitespace-nowrap  block w-full rounded-lg border p-3 text-center text-base font-medium text-secondary transition hover:bg-green"
              onClick={() => handleReview(topic)}
            >
              Add topic
            </button>
          </div>
          <div className="flex-1">
            <button
              className="text-gray-900 block w-full rounded-lg border border-gray-200 p-3 text-center text-base font-medium transition hover:bg-main hover:text-secondary"
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
// async function createCalendarEvent() {
//   console.log("Creating calendar event");
//   const event = {
//     summary: eventName,
//     description: eventDescription,
//     start: {
//       dateTime: start.toISOString(), // Date.toISOString() ->
//       timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone, // America/Los_Angeles
//     },
//     end: {
//       dateTime: end.toISOString(), // Date.toISOString() ->
//       timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone, // America/Los_Angeles
//     },
//   };
//   await fetch(
//     "https://www.googleapis.com/calendar/v3/calendars/primary/events",
//     {
//       method: "POST",
//       headers: {
//         Authorization: "Bearer " + session.provider_token, // Access token for google
//       },
//       body: JSON.stringify(event),
//     }
//   )
//     .then((data) => {
//       return data.json();
//     })
//     .then((data) => {
//       console.log(data);
//       alert("Event created, check your Google Calendar!");
//     });
// }
