import React, { useState, useEffect } from "react";
import CreateNewTopic from "../createNewTopic/CreateNewTopic";
import UpComingTopic from "../dashboard/UpComingTopic";
import IndividualTopicModalComponent from "../IndividualTopicModalComponent/IndividualTopicModalComponent";

const PersonalDashboard = ({ session, refreshModalData }) => {
  const [userTopics, setUserTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState(null);
  // console.log(userTopics);
  const userID = session.user.id;
  // console.log(userID);

  const getUsersTopics = async () => {
    try {
      const response = await fetch(
        `https://deja-review-backend.onrender.com/dataForTable?sub=${userID}`
      );
      const data = await response.json();

      setUserTopics(data);
    } catch (error) {
      console.log(
        "The ERROR occured in getUsersTopics in PersonalDashboard:",
        error
      );
    }
  };

  useEffect(() => {
    getUsersTopics();
  }, []);

  const handleReview = async (topic) => {
    // console.log("topic", topic);

    if (topic.entry_id === undefined) {
      console.error("Error: topicId is undefined");
      return;
    }

    try {
      const response = await fetch(
        "https://deja-review-backend.onrender.com/updateDueDate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            topicId: topic.entry_id,
          }),
        }
      );
      if (!response.ok) {
        console.log(`HTTP error! Status: ${response.status}`);
        return response.json();
      }
      const data = await response.json();

      await createCalendarEvent(topic);

      // console.log("Due date updated successfully:", data);

      getUsersTopics();
    } catch (error) {
      console.log("The ERROR occured in fetchData in DisplaymodalData:", error);
    }
  };

  async function createCalendarEvent(topic) {
    try {
      console.log("Creating calendar event");

      const currentDate = new Date();
      const currentDueDate = new Date(topic.due_date);
      let updatedDueDate = new Date(currentDueDate);

      if (topic.reviews_remaining === 0) {
        updatedDueDate.setDate(currentDate.getDate() + 180);
      } else if (topic.reviews_remaining === 1) {
        updatedDueDate.setDate(currentDate.getDate() + 90);
      } else {
        updatedDueDate.setDate(currentDate.getDate() + 30);
      }

      const startDateTime = new Date(updatedDueDate.getTime());
      const endDateTime = new Date(
        startDateTime.getTime() + 3 * 60 * 60 * 1000
      );

      const event = {
        summary: topic.topic_name,
        description: topic.description,
        start: {
          dateTime: startDateTime.toISOString(),
          timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        },
        end: {
          dateTime: endDateTime.toISOString(),
          timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        },
      };
      const request = await fetch(
        "https://www.googleapis.com/calendar/v3/calendars/primary/events",
        {
          method: "POST",
          headers: {
            Authorization: "Bearer " + session.provider_token, // Access token for google
          },
          body: JSON.stringify(event),
        }
      );

      const response = await request.json();

      console.log(response);
      alert("Event created, check your Google Calendar!");
    } catch (error) {
      console.error("Error updating due date:", error);
    }
  }

  let rowNumber = 0;

  const openModal = (topic) => {
    setSelectedTopic(topic);
  };

  const closeModal = () => {
    setSelectedTopic(null);
  };
  // console.log(userTopics);

  return (
    <div className="min-h-screen p-6 flex flex-col items-center bg-secondary">
      <div className="flex flex-col gap-6">
        <div className="flex justify-between flex-wrap md:flex-nowrap md:w-full gap-6">
          <CreateNewTopic session={session} getUsersTopics={getUsersTopics} />
          <UpComingTopic userTopics={userTopics} />
        </div>

        <div className="overflow-hidden rounded-lg">
          <table className="table table-zebra border-collapse border-2 border-babyBlue">
            <thead className="bg-main">
              <tr className="text-base text-white">
                <th className="font-semibold text-center">#</th>
                <th className="font-semibold text-center">Topic Name</th>
                <th className="font-semibold text-center">Module</th>
                <th className="font-semibold text-center">Link</th>
                <th className="font-semibold text-center">Due Date</th>
              </tr>
            </thead>

            <tbody className="border-2 border-babyBlue">
              {userTopics.map((topic, index) => {
                const dueDate = new Date(topic.due_date).toDateString();
                return (
                  <tr
                    key={topic.entry_id}
                    className={`font-semibold hover:text-black`}
                  >
                    <td className="border-2 border-babyBlue p-3 text-center">
                      {++rowNumber}
                    </td>
                    <td
                      className="border-2 border-babyBlue p-3 text-center cursor-pointer  hover:text-blue-500"
                      onClick={() => openModal(topic)}
                    >
                      {topic.topic_name}
                    </td>
                    <td className="border-2 border-babyBlue p-3 text-center">
                      {topic.module_name}
                    </td>
                    <td className="border-2 border-babyBlue p-3 text-center">
                      <a
                        href={topic.reference_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-500"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Review Link
                      </a>
                    </td>
                    <td className="border-2 border-babyBlue p-3 text-center">
                      {dueDate}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <IndividualTopicModalComponent
        isOpen={!!selectedTopic}
        onClose={closeModal}
        topic={selectedTopic || {}}
        onReview={handleReview}
      />
    </div>
  );
};

export default PersonalDashboard;
