import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { addTopicToDashboard } from "./utils";

const CreateNewTopic = () => {
  const [modules, setModules] = useState([]);
  const [topic_name, setTopicName] = useState("");
  const [description, setDescription] = useState("");
  const [reference_link, setReferenceLink] = useState("");
  const [selectedModuleId, setSelectedModuleId] = useState("");
  const { user } = useAuth0();
  const is_user_generated = true;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://deja-review-backend.onrender.com/modules"
        );
        setModules(response.data);
      } catch (error) {
        console.error("Error fetching modules:", error);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault(e);

    if (!selectedModuleId || !topic_name || !description || !reference_link) {
      alert("You must fill all the required fields");
      return;
    }

    const personalNewTopicData = {
      module_id: selectedModuleId,
      topic_name,
      description,
      reference_link,
      is_user_generated,
      userId: user.sub,
    };

    try {
      const res = await fetch(
        "https://deja-review-backend.onrender.com/createNewTopic",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(personalNewTopicData),
        }
      );

      const response = await res.json();
      await addTopicToDashboard({ userId: user.sub, topicId: response.id });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="w-11/12 flex flex-col p-3 rounded-md bg-indigo-100">
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <div>
            <label className="block text-lg leading-none mb-1">Modules</label>
            <select
              required
              className="block p-2 w-full cursor-pointer text-base leading-[140%] font-normal mb-1 bg-white bg-opacity-80 rounded-md shadow-lg"
              onChange={(e) => setSelectedModuleId(e.target.value)}
            >
              <option>Choose module...</option>
              {modules.map((module) => (
                <option key={module.id} value={module.id}>
                  {module.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-lg leading-none mb-1">
              Topic Name
            </label>
            <input
              type="text"
              placeholder={"Enter Topic"}
              value={topic_name}
              onChange={(e) => setTopicName(e.target.value)}
              required
              className="block p-2 text-base w-full font-normal leading-[18px] tracking-[0px] mb-1 bg-opacity-80 rounded-md shadow-lg bg-white"
            />
          </div>

          <div>
            <label className="block text-lg leading-none mb-1">
              Description
            </label>
            <input
              type="text"
              placeholder={"Enter Description"}
              value={description}
              required
              onChange={(e) => setDescription(e.target.value)}
              className="block p-2 text-base w-full font-normal leading-[18px] tracking-[0px] mb-1 bg-opacity-80 rounded-md shadow-lg bg-white"
            />
          </div>
          <div>
            <label className="block text-lg leading-none mb-1">
              Reference Link
            </label>
            <input
              type="url"
              placeholder={"Enter Reference Link"}
              value={reference_link}
              required
              onChange={(e) => setReferenceLink(e.target.value)}
              className="block p-2 text-base w-full font-normal leading-[18px] tracking-[0px] mb-1 bg-opacity-80 rounded-md shadow-lg bg-white"
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-indigo-500 m-auto w-max px-8 py-2 rounded-lg shadow-lg text-secondary text-lg font-bold hover:bg-indigo-700"
          onClick={(e) => handleSubmit(e)}
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default CreateNewTopic;
