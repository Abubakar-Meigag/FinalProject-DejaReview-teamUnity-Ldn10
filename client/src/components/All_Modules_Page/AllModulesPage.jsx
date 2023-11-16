import React, { useState } from "react";
import "./style.css";
import CardForTopic from "./Card_For_Topic/Card_for_topic";
const fakedata = [
  {
    module: "HTML||CSS",
    topics: [
      {
        nameOfTopic: "Tags",
        details:
          "If you're a Dropbox Pro or Dropbox for Business user, you can control who accesses your links and for how long by setting passwords and expirations for them. Alternatively, you can use view-only permissions for shared folders. Links are ideal for replacing email attachments, whereas view-only permissions for shared folders are useful for keeping collaborators continuously up to date without giving them the ability to change files..",
      },
      {
        nameOfTopic: "Styling",
        details: "Array of ayyj ooen ooog hynslki oenvttb ioo, ppp.",
      },
    ],
  },
  {
    module: "JavaScript 1",
    topics: [
      {
        nameOfTopic: "Array",
        details: "Array of ayyj ooen ooog hynslki oenvttb ioo, ppp.",
      },
      {
        nameOfTopic: "Object",
        details:
          "If you're a Dropbox Pro or Dropbox for Business user, you can control who accesses your links and for how long by setting passwords and expirations for them. Alternatively, you can use view-only permissions for shared folders. Links are ideal for replacing email attachments, whereas view-only permissions for shared folders are useful for keeping collaborators continuously up to date without giving them the ability to change files..",
      },
    ],
  },
  {
    module: "React",
    topics: [
      {
        nameOfTopic: "Components",
        details:
          "If you're a Dropbox Pro or Dropbox for Business user, you can control who accesses your links and for how long by setting passwords and expirations for them. Alternatively, you can use view-only permissions for shared folders. Links are ideal for replacing email attachments, whereas view-only permissions for shared folders are useful for keeping collaborators continuously up to date without giving them the ability to change files..",
      },
      {
        nameOfTopic: "Imports",
        details:
          "If you're a Dropbox Pro or Dropbox for Business user, you can control who accesses your links and for how long by setting passwords and expirations for them. Alternatively, you can use view-only permissions for shared folders. Links are ideal for replacing email attachments, whereas view-only permissions for shared folders are useful for keeping collaborators continuously up to date without giving them the ability to change files..",
      },
    ],
  },
];
export default function AllModulesPage() {
  const [openListIndex, setOpenListIndex] = useState(null);

  const handleListHeaderClick = (index) => {
    setOpenListIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const [topicStates, setTopicStates] = useState(
    fakedata.flatMap((element) => element.topics.map(() => false))
  );

  const toggleTopic = (moduleIndex, topicIndex) => {
    const flatIndex = moduleIndex * fakedata[0].topics.length + topicIndex;
    const newTopicStates = [...topicStates];
    newTopicStates[flatIndex] = !newTopicStates[flatIndex];
    setTopicStates(newTopicStates);
  };

  return (
    <div className="modules-container">
      <h1 className="all-modules-header">All Modules</h1>
      <ul className="modules-list">
        {fakedata.map((element, index) => (
          <li
            className={`list-item ${index === openListIndex ? "open" : ""}`}
            key={index}
          >
            <div
              className="module-name"
              onClick={() => handleListHeaderClick(index)}
            >
              {element.module}
            </div>
            <div className="topics-container">
              <ul className="topics-list">
                {element.topics.map((topic, subIndex) => (
                  <li
                    key={subIndex}
                    onClick={() => toggleTopic(index, subIndex)}
                    className="topics-container-inner"
                  >
                    <h2>{topic.nameOfTopic}</h2>
                    <CardForTopic
                      showTopic={
                        topicStates[
                          index * fakedata[0].topics.length + subIndex
                        ]
                      }
                      toggleTopic={() => toggleTopic(index, subIndex)}
                      topic={topic}
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
