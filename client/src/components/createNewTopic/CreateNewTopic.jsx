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
    <div className="w-[28rem]  flex flex-col px-6 py-2 rounded-2xl bg-gray-100 border-1 border-solid border-teal-500 hover:border-purple-400">
      <div className=" text-2xl mb-1 mt-5 text-center">
        CREATE NEW <span className="font-bold text-mypurple">TOPIC</span>
        <br></br>
        <span className=" mb-6 inline-block h-1 w-[100px] rounded bg-mypurple"></span>
      </div>

      <form className="flex flex-col gap-3">
        <div className="block relative">
          <div>
            <label className="block cursor-text text-md leading-[140%] mb-1">
              Modules
            </label>
            <select
              required
              className="block p-2 w-full cursor-text text-sm leading-[140%] font-normal mb-1 bg-white bg-opacity-80 border-2 border-solid border-myturquoise rounded-md"
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

          <label className="block cursor-text text-md leading-[140%] mb-1">
            Topic Name
          </label>
          <input
            type="text"
            placeholder={"Enter Topic"}
            value={topic_name}
            onChange={(e) => setTopicName(e.target.value)}
            required
            className="block p-2 text-sm w-full font-normal leading-[18px] tracking-[0px] appearance-none focus:ring-2 ring-offset-2 ring-sky-500 outline-0 mb-1 bg-white bg-opacity-80 border-2 border-solid border-myturquoise rounded-md"
          />

          <label className="block cursor-text text-md leading-[140%] mb-2">
            Description
          </label>
          <input
            type="text"
            placeholder={"Enter Description"}
            value={description}
            required
            onChange={(e) => setDescription(e.target.value)}
            className="block p-2 text-sm w-full font-normal leading-[18px] tracking-[0px] appearance-none focus:ring-2 ring-offset-2 ring-sky-500 outline-0 mb-1 bg-white bg-opacity-80 border-2 border-solid border-myturquoise rounded-md"
          />
        </div>

        <div className="block relative">
          <label className="block cursor-text text-md leading-[140%] mb-2">
            Reference Link
          </label>
          <input
            type="url"
            placeholder={"Enter Reference Link"}
            value={reference_link}
            required
            onChange={(e) => setReferenceLink(e.target.value)}
            className="block p-2 text-sm w-full font-normal leading-[18px] tracking-[0px] appearance-none focus:ring-2 ring-offset-2 ring-sky-500 outline-0 mb-1 bg-white bg-opacity-80 border-2 border-solid border-myturquoise rounded-md"
          />
        </div>

        <button
          type="submit"
          className="bg-myturquoise m-auto w-max px-8 py-2 rounded text-white text-m font-semibold hover:bg-mypurple"
          onClick={(e) => handleSubmit(e)}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateNewTopic;
