import React, { useState, useEffect } from "react";
import CreateNewTopic from "../createNewTopic/CreateNewTopic";
import { useAuth0 } from "@auth0/auth0-react";
import UpComingTopic from "../dashboard/UpComingTopic";
import IndividualTopicModalComponent from "../IndividualTopicModalComponent/IndividualTopicModalComponent";

const PersonalDashboard = () => {
  const { user } = useAuth0();
  const [userTopics, setUserTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const { sub } = user;

  const refreshData = () => {
    fetch(`https://deja-review-backend.onrender.com/dataForTable?sub=${sub}`)
      .then((response) => response.json())
      .then((data) => {
        setUserTopics(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  const handleReview = (topic) => {
    const topicId = topic.entry_id;
    if (topicId === undefined) {
      console.error("Error: topicId is undefined");
      return;
    }
    fetch("https://deja-review-backend.onrender.com/updateDueDate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        topicId: topicId,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Due date updated successfully:", data);
        refreshData();
      })
      .catch((error) => {
        console.error("Error updating due date:", error);
      });
  };

  useEffect(() => {
    refreshData();
  }, []);

  let rowNumber = 0;

  const openModal = (topic) => {
    setSelectedTopic(topic);
  };

  const closeModal = () => {
    setSelectedTopic(null);
  };

  return (
    <div className="bg-light flex flex-col justify-start bg-cover bg-center items-center min-h-screen">
      <div className="inline-block">
        <div className="flex flex-row gap-28 pb-3 pt-6">
          <div className="lg:flex justify-center mb-4 text-white">
            <CreateNewTopic />
          </div>
          <div className="flex justify-center mb-4 ">
            <UpComingTopic userTopics={userTopics} />
          </div>
        </div>

        <div>
          <table className="table table-zebra border border-collapse border-gray-300 text-dark-text">
            <thead className="bg-base-100 text-secondary text-[1rem]">
              <tr>
                <th className="border-b p-3 font-bold text-center">#</th>
                <th className="border-b p-3 font-bold text-center">
                  Topic Name
                </th>
                <th className="border-b p-3 font-bold text-center">Module</th>
                <th className="border-b p-3 font-bold text-center">Link</th>
                <th className="border-b p-3 font-bold text-center">Due Date</th>
              </tr>
            </thead>

            <tbody>
              {userTopics.map((topic, index) => {
                const dueDate = new Date(topic.due_date).toDateString();
                return (
                  <tr
                    key={topic.entry_id}
                    className={`font-semibold hover:bg-base-100 hover:text-black bg-light`}
                  >
                    <td className="border-b p-3 text-center">{++rowNumber}</td>
                    <td
                      className="border-b p-3 text-center cursor-pointer  hover:text-white"
                      onClick={() => openModal(topic)}
                    >
                      {topic.topic_name}
                    </td>
                    <td className="border-b p-3 text-center">
                      {topic.module_name}
                    </td>
                    <td className="border-b p-3 text-center">
                      <a
                        href={topic.reference_link}
                        className="hover:text-white"
                      >
                        Review Link
                      </a>
                    </td>
                    <td className="border-b p-3 text-center">{dueDate}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <IndividualTopicModalComponent
          isOpen={!!selectedTopic}
          onClose={closeModal}
          topic={selectedTopic || {}}
          onReview={handleReview}
        />
      </div>
    </div>
  );
};
export default PersonalDashboard;
