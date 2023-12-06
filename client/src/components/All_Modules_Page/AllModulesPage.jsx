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
    <div className="modules-container">
      <h1 className="all-modules-header">All Modules</h1>
      <ul className="modules-list">
        {modalData.map((element, index) => (
          <li
            className={`list-item ${index === openListIndex ? "open" : ""}`}
            key={index}
          >
            <div
              className="module-info"
              onClick={() => handleListHeaderClick(index)}
            >
              <h2>{element.module_name}</h2>
              <p>{element.module_description}</p>
            </div>
            <div className="topics-container">
              <ul className="topics-list">
                {element.topics.map((topic, subIndex) => (
                  <li
                    key={subIndex}
                    onClick={() => openTopic(topic)}
                    className="topics-container-inner"
                  >
                    <h2>{topic.topic_name}</h2>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
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
