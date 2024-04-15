import React, { useState, useEffect } from "react";
import "./AllModulesPage.css";
import CardForTopic from "./Card_For_Topic/Card_for_topic";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "../loading/Loading";

export default function AllModulesPage({ refreshmodalData }) {
  const [modalData, setModalData] = useState([]);
  const { isLoading } = useAuth0();

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://deja-review-backend.onrender.com/allModulesPage`
      );
      const data = await response.json();
      setModalData(data);
    } catch (error) {
      console.log("The ERROR occured in fetchData in DisplaymodalData:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [refreshmodalData]);

  const [openListIndex, setOpenListIndex] = useState(null); //module

  const handleListHeaderClick = (index) => {
    setOpenListIndex((prevIndex) => (prevIndex === index ? null : index)); //module
  };

  const [selectedTopic, setSelectedTopic] = useState(null);

  const openTopic = (topic) => {
    setSelectedTopic(topic);
  };

  const closeTopic = () => {
    setSelectedTopic(null);
  };

  if (isLoading) {
    return <div>{<Loading />}</div>;
  }

  return (
    <div className="modules-container min-h-screen min-w-screen">
      <h1 className="all-modules-header">CYF Modules & Topics</h1>
      <div className=" modules-list">
        {modalData.map((element, index) => (
          <div
            className={`flex w-full justify-between rounded-md items-start list-item ${
              index === openListIndex ? "open" : ""
            }`}
            key={index}
          >
            <div
              className="bg-indigo-300 module-info"
              onClick={() => handleListHeaderClick(index)}
            >
              <h2 className="text-3xl font-semibold text-white">
                {element.module_name}
              </h2>
              <p className="py-1">{element.module_description}</p>
            </div>
            <div className="flex flex-col my-2 gap-3 topics-container">
              {element.topics.map((topic, subIndex) => (
                <div
                  key={subIndex}
                  onClick={() => openTopic(topic)}
                  className="flex justify-between p-2 bg-indigo-100 rounded-md"
                >
                  <h2 className="cursor-pointer">{topic.topic_name}</h2>
                  <button className="w-max px-8 py-1 text-lg  border border-solid rounded-md border-gray-500 hover:bg-accent hover:text-white">
                    Add topic
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <CardForTopic
        isOpen={!!selectedTopic}
        onClose={closeTopic}
        topic={selectedTopic || {}}
        onReview={(topic) => {
          console.log("Topic reviewed:", topic);
          closeTopic();
        }}
      />
    </div>
  );
}
