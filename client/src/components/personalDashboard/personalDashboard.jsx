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

  const openModal = (topic) => {
    setSelectedTopic(topic);
  };

  const closeModal = () => {
    setSelectedTopic(null);
  };
  console.log(userTopics);

  function getStatus(date) {
    const currentDate = new Date();
    console.log("currentDate", currentDate);

    const reviewDate = new Date(date);

    const timeDiff = reviewDate.getTime() - currentDate.getTime();
    console.log("timeDiff", timeDiff);
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    console.log("daysDiff", daysDiff);
    if (daysDiff >= 4) {
      return "bg-greenDate";
    } else if (daysDiff >= 1 && daysDiff <= 3) {
      return "bg-orangeDate";
    } else if (daysDiff <= 0) {
      return "bg-redDate";
    }
  }

  return (
    <div className="min-h-screen p-6 flex flex-col items-center bg-secondary">
      <div className="flex flex-col gap-6">
        <div className="flex justify-between flex-wrap md:flex-nowrap md:w-full gap-6">
          <CreateNewTopic />
          <UpComingTopic userTopics={userTopics} />
        </div>

        <div className="pt-6  bflex flex-col content-center w-full items-center gap-4">
          <div className="flex w-full font-bold text-5xl">
            <h1 className="text-4xl font-bold">
              TOPICS TO REVIEW:
              <span className="text-accent">{userTopics.length}</span>
            </h1>
          </div>
          <div className="rounded-md bg-indigo-100 p-4 flex flex-col gap-4">
            {userTopics.map((topic, index) => {
              const dueDate = new Date(topic.due_date).toDateString();
              return (
                <div
                  key={index}
                  className="flex w-full justify-between rounded-md items-start"
                  style={{ backgroundColor: "white" }}
                >
                  <div className="flex w-6/12 p-4 gap-2 items-start ">
                    <h1 className="">{topic.topic_name.toUpperCase()}</h1>
                    <div>
                      <h1
                        className="px-2 rounded-md"
                        style={{ backgroundColor: topic.module_color }}
                      >
                        {topic.module_name}
                      </h1>
                    </div>
                  </div>
                  <div className="w-6/12 p-2 flex flex-col items-end justify-center gap-3">
                    <h1
                      className={`flex justify-self-end ${getStatus(
                        topic.due_date
                      )}`}
                    >
                      {dueDate}
                    </h1>
                    <button
                      onClick={() => openModal(topic)}
                      className="flex self-end w-max px-8 pt-1 text-lg border border-solid rounded-md border-gray-500 hover:bg-indigo-100"
                    >
                      Learn now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
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
