import React, { useState, useEffect } from "react";
import ModuleDropdown from "../dashboard/ModuleDropdown";
import { useAuth0 } from "@auth0/auth0-react";
import UpComingTopic from "../dashboard/UpComingTopic";
import IndividualTopicModalComponent from "../IndividualTopicModalComponent/IndividualTopicModalComponent";

const PersonalDashboard = () => {

const { user } = useAuth0();
const [userTopics, setUserTopics] = useState({ modules: [] });
const [selectedTopic, setSelectedTopic] = useState(null);
const { sub } = user

useEffect(() => {
  fetch(`https://deja-review-backend.onrender.com/dataForTable?sub=${sub}`)
    .then((response) => response.json())
    .then((data) => {
      console.log("Data received:", data);
      setUserTopics(data);
    })
    .catch((error) => console.error("Error fetching data:", error));
}, []);


let rowNumber = 0;


const openModal = (topic) => {
    setSelectedTopic(topic);
  };

  const closeModal = () => {
    setSelectedTopic(null);
  };

  return (
    <div className="p-4 bg-dark-purple w-full">
      <div className="flex justify-center mb-4 text-white">
        <ModuleDropdown />
      </div>
      <div className="flex justify-center mb-4 text-white">
        <UpComingTopic userTopics={userTopics} />
      </div>
      <table className="w-full border border-collapse border-gray-300 bg-sky-900 text-white">
        <thead className="bg-amber-300 text-black" >
          <tr>
            <th className="border-b p-3 font-bold text-center">#</th>
            <th className="border-b p-3 font-bold text-center">Topic Name</th>
            <th className="border-b p-3 font-bold text-center">Module</th>
            <th className="border-b p-3 font-bold text-center">Link</th>
            <th className="border-b p-3 font-bold text-center">Due Date</th>
          </tr>
        </thead>
        <tbody>
          {userTopics.modules.map((topic) => (
            <tr key={topic.entry_id} 
                className="hover:bg-amber-300 hover:text-black">
              <td className="border-b p-3 text-center">{++rowNumber}</td>
              <td className="border-b p-3 text-center cursor-pointer"
              onClick={() => openModal(topic)}>
                {topic.topic_name}</td>
              <td className="border-b p-3 text-center">{topic.module_name}</td>
              <td className="border-b p-3 text-center">

                <a href={topic.reference_link}>
                  Review Link
                </a>
              </td>
              <td className="border-b p-3 text-center">{new Date(topic.due_date).toDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <IndividualTopicModalComponent
        isOpen={!!selectedTopic}
        onClose={closeModal}
        topic={selectedTopic || {}}
        onReview={(topic) => {
          console.log("Topic reviewed:", topic);
          closeModal(); 
        }}
      />
    </div>
  );
};

export default PersonalDashboard;
