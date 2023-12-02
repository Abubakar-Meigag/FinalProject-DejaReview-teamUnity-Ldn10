import React, { useState, useEffect } from "react";
import supabase from "../../config/supadaseClient";

const PersonalDashboard = () => {
  const [fetchError, setFetchError] = useState(null);
  const [userModules, setUserModules] = useState([]);

  useEffect(() => {
    const fetchAllModal = async () => {
      const { data, error } = await supabase
        .from("learning_topics_tracker")
        .select(
          `*,
          topics (id,
            topic_name,
            description,
            reference_link,
            test_link)`
        )
        .filter("topics.id", "eq", "learning_topics_tracker.topic_id");

      if (error) {
        setFetchError("Could'n fetch modules");

        setUserModules(null);
        console.log(error);
      }
      if (data) {
        setUserModules(data);
        setFetchError(null);
      }
    };
    fetchAllModal();
  }, []);
  console.log(userModules);

  let rowNumber = 0;

  return (
    <div className="p-4 bg-dark-purple">
      {/* <table className="w-full border border-collapse border-gray-300 bg-sky-900 text-white">
        <thead className="bg-amber-300 text-black">
          <tr>
            <th className="border-b p-3 font-bold text-center">#</th>
            <th className="border-b p-3 font-bold text-center">Topic Name</th>
            <th className="border-b p-3 font-bold text-center">Module</th>
            <th className="border-b p-3 font-bold text-center">Link</th>
            <th className="border-b p-3 font-bold text-center">Due Date</th>
          </tr>
        </thead>
        <tbody>
          {userModules.modules.map((topic) => (
            <tr key={topic.topicId} className="hover:bg-amber-300">
              <td className="border-b p-3 text-center">{++rowNumber}</td>
              <td className="border-b p-3 text-center">{topic.topic_name}</td>
              <td className="border-b p-3 text-center">{topic.name}</td>
              <td className="border-b p-3 text-center">
                {topic.reference_link}
              </td>
              <td className="border-b p-3 text-center">{topic.dueDate}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
};

export default PersonalDashboard;
