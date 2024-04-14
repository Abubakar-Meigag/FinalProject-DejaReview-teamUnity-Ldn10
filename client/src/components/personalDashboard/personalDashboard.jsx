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
    // fetch(`https://deja-review-backend.onrender.com/dataForTable?sub=${sub}`)
    fetch(`http://localhost:5005/dataForTable?sub=${sub}`)
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
  console.log(userTopics);
  return (
    <div className="max-h-screen w-full flex m-0 bg-indigo-300">
      <div className="flex flex-col items-center w-6/12">
        <div className="flex flex-col w-full h-full justify-center items-center bg-white">
          <div className="flex w-11/12 py-3">
            <h1 className="text-4xl font-bold ">
              UPCOMING
              <span className="font-bold text-accent"> TOPICS</span>
            </h1>
          </div>
          <UpComingTopic userTopics={userTopics} />
        </div>
        <div className="flex flex-col w-full h-full justify-center items-center bg-white">
          <div className="flex w-11/12 py-3">
            <h1 className="text-4xl font-bold ">
              CREATE NEW <span className="font-bold text-accent">TOPIC</span>
            </h1>
          </div>
          <CreateNewTopic />
        </div>
      </div>

      <div className="flex flex-col overflow-y-scroll content-center w-6/12 items-center gap-4 bg-white">
        <div className="flex w-10/12 py-3 font-bold text-5xl gap-3">
          <h1 className="">Topics left to review</h1>
          <h4 className="rounded-md bg-main p-1">{userTopics.length}</h4>
        </div>
        {userTopics.map((topic, index) => {
          const dueDate = new Date(topic.due_date).toDateString();
          return (
            <div
              key={index}
              className="flex w-10/12 justify-between  p-4 rounded-md bg-blue-50 items-start"
            >
              <div className="flex w-8/12 gap-2 items-center ">
                <h1 className="">{topic.topic_name.toUpperCase()}</h1>
                <div>
                  <h1
                    className="px-2 py-1 rounded-md"
                    style={{ backgroundColor: topic.module_color }}
                  >
                    {topic.module_name}
                  </h1>
                </div>
              </div>
              <div className="w-4/12 flex flex-col items-end justify-center gap-3">
                <h1 className="flex justify-self-end">{dueDate}</h1>
                <button
                  onClick={() => openModal(topic)}
                  className="w-max px-8 py-1 text-lg outline border rounded-md border-gray-900 hover:bg-indigo-100"
                >
                  Learn now
                </button>
              </div>
            </div>
          );
        })}
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
