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
        // console.log(data);
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
    <div className="min-h-screen p-6 flex flex-col items-center bg-base-100">
      
      <div className="flex flex-col gap-6">
        <div className="flex justify-between flex-wrap md:flex-nowrap md:w-full gap-6">
          <CreateNewTopic />
          <UpComingTopic userTopics={userTopics} />
        </div>

        <div className="overflow-hidden rounded-lg">
          <table className="table table-zebra">
            <thead className="bg-[#53988f]">
              <tr className="text-base text-white">
                <th className="font-semibold text-center">#</th>
                <th className="font-semibold text-center">Topic Name</th>
                <th className="font-semibold text-center">Module</th>
                <th className="font-semibold text-center">Link</th>
                <th className="font-semibold text-center">Due Date</th>
              </tr>
            </thead>

            <tbody>
              {userTopics.map((topic, index) => {
                const dueDate = new Date(topic.due_date).toDateString();
                return (
                  <tr
                    key={topic.entry_id}
                    className={`font-semibold hover:bg-base-100 hover:text-black`}
                  >
                    <td className="border-b p-3 text-center">{++rowNumber}</td>
                    <td
                      className="border-b p-3 text-center cursor-pointer  hover:text-blue-500"
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
                        className="hover:text-blue-500"
                        target="_blank" rel="noopener noreferrer"
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
      </div>

      {/* modal */}
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
