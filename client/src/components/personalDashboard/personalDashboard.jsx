import React, { useState, useEffect } from "react";
import CreateNewTopic from "../createNewTopic/CreateNewTopic";
import { useAuth0 } from "@auth0/auth0-react";
import UpComingTopic from "../UpComingTopic/UpComingTopic";
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
    <div className="min-h-screen w-full flex bg-indigo-300">
      <div className="flex flex-col items-center w-6/12">
        <div className="flex w-full h-full justify-center items-center bg-indigo-400">
          <UpComingTopic userTopics={userTopics} />
        </div>
        <div className="flex w-full h-full justify-center items-center bg-indigo-200">
          <CreateNewTopic />
        </div>
      </div>

      <div className="flex flex-col content-center w-6/12 items-center gap-4 bg-indigo-600">
        {userTopics.map((topic, index) => {
          const dueDate = new Date(topic.due_date).toDateString();
          return (
            <div className="flex flex-col w-10/12 px-6  rounded-2xl bg-indigo-200">
              <h1
                className="border-2 border-babyBlue p-3 text-center cursor-pointer  hover:text-blue-500"
                onClick={() => openModal(topic)}
              >
                {topic.topic_name}
              </h1>
              <h1 className="border-2 border-babyBlue p-3 text-center">
                {topic.module_name}
              </h1>
              <h1 className="border-2 border-babyBlue p-3 text-center">
                <a
                  href={topic.reference_link}
                  className="hover:text-blue-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Review Link
                </a>
              </h1>
              <h1 className="border-2 border-babyBlue p-3 text-center">
                {dueDate}
              </h1>
            </div>
          );
        })}

        {/* <table className="table table-zebra border-collapse border-2 border-babyBlue">
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
          </table> */}
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
