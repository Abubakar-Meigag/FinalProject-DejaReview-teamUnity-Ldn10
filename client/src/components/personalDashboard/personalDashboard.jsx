import React, { useState, useEffect } from "react";
import CreateNewTopic from "../createNewTopic/CreateNewTopic";
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
    <div className="bg-light flex flex-col justify-start bg-cover bg-center items-center min-h-screen">
      <div className="inline-block">
        <div className="flex flex-row gap-28 pb-3 pt-6">
          <div className="lg:flex justify-center mb-4 text-white">
            <CreateNewTopic />
          </div>
          <div className="flex justify-center mb-4 text-black bg-white border-solid border-2 border-sky-200 hover:border-[#7747ff] rounded-md">
            <UpComingTopic userTopics={userTopics} />
          </div>
        </div>
        <div>
          <table className="table table-zebra border border-collapse border-gray-300 text-dark-purple">
            <thead className="bg-dark-purple text-base-200 text-[1rem]">
              <tr>
                <th className="border-b p-3 font-bold text-center">#</th>
                <th className="border-b p-3 font-bold text-center">
                  Topic Name
                </th>
                <th className="border-b p-3 font-bold text-center">Module</th>
                <th className="border-b p-3 font-bold text-center">Link</th>
                <th className="border-b p-3 font-bold text-center">Due Date</th>
              </tr>
            </thead>
            <tbody>
              {userTopics.modules.map((topic) => (
                <tr
                  key={topic.entry_id}
                  className="font-semibold hover:bg-gray-50 hover:text-black"
                >
                  <td className="border-b p-3 text-center">{++rowNumber}</td>
                  <td
                    className="border-b p-3 text-center cursor-pointer hover:text-blue-600"
                    
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
                      className="hover:text-blue-600"
                    >
                      Review Link
                    </a>
                  </td>
                  <td className="border-b p-3 text-center">
                    {new Date(topic.due_date).toDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
    </div>
  );
};

export default PersonalDashboard;
