import React, { useState, useEffect } from "react";
import "./AllModulesPage.css";
import CardForTopic from "./Card_For_Topic/Card_for_topic";
import supabase from "../../config/supadaseClient";

export default function AllModulesPage({ refreshmodalData }) {
  const [fetchError, setFetchError] = useState(null);
  const [modalData, setModalData] = useState([]);

  useEffect(() => {
    const fetchAllModal = async () => {
      const { data, error } = await supabase.from("modules").select(`
          id,
          name,
          description,
          topics (id,
            topic_name,
            description,
            reference_link,
            test_link)
        `);
      if (error) {
        setFetchError("Could'n fetch modules");

        setModalData(null);
        console.log(error);
      }
      if (data) {
        setModalData(data);
        setFetchError(null);
      }
    };
    fetchAllModal();
  }, [refreshmodalData]);
  console.log(modalData);

  const [openListIndex, setOpenListIndex] = useState(null);

  const handleListHeaderClick = (index) => {
    setOpenListIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const [topicStates, setTopicStates] = useState(
    modalData.flatMap((element) => element.topics.map(() => false))
  );

  const toggleTopic = (moduleIndex, topicIndex) => {
    const flatIndex = moduleIndex * modalData[0].topics.length + topicIndex;
    const newTopicStates = [...topicStates];
    newTopicStates[flatIndex] = !newTopicStates[flatIndex];
    setTopicStates(newTopicStates);
  };

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
              <h2>{element.name}</h2>
              <p>{element.description}</p>
            </div>
            <div className="topics-container">
              <ul className="topics-list">
                {element.topics.map((element, subIndex) => (
                  <li
                    key={subIndex}
                    onClick={() => toggleTopic(index, subIndex)}
                    className="topics-container-inner"
                  >
                    <h2>{element.topic_name}</h2>
                    <CardForTopic
                      key={element.id}
                      showTopic={
                        topicStates[
                          index * modalData[0].topics.length + subIndex
                        ]
                      }
                      toggleTopic={() => toggleTopic(index, subIndex)}
                      topic={element}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
