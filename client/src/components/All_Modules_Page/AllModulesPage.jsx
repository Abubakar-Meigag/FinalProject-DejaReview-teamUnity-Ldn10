import React, { useState, useEffect } from "react";
import "./AllModulesPage.css";
import CardForTopic from "./Card_For_Topic/Card_for_topic";
import supabase from "../../config/supadaseClient";

export default function AllModulesPage({ refreshmodalData }) {
  const [fetchError, setFetchError] = useState(null);
  const [modalData, setModalData] = useState([]);
  const { isLoading } = useAuth0();

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
      <h1 className="all-modules-header underline text-zinc-600">CYF Modules & Topics</h1>
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
              <h2 className="module-name">{element.name}</h2>
              <p className="module-description">{element.description}</p>

            </div>
            <div className="topics-container">
              <ul className="topics-list">
                {element.topics.map((topic, subIndex) => (
                  <li
                    key={subIndex}
                    onClick={() => openTopic(topic)}
                    className="topics-container-inner"
                  >
                    <h2 className="cursor-pointer">{topic.topic_name}</h2>
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
