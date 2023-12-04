import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

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

  const handelSubmit = async (e) => {
    e.preventDefault(e);

    if (!selectedModuleId || !topic_name || !description || !reference_link) {
      alert("You must fill all the required fields");
      return;
    }

    const personalTopicData = {
      module_id: selectedModuleId,
      topic_name,
      description,
      reference_link,
      is_user_generated,
      userId: user.sub,
    };

    try {
      const res = await fetch("http://localhost:5005/createNewTopic", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(personalTopicData),
      });

      console.warn(res);
      // window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div
      className={`flex justify-center bg-cover bg-center items-center min-w-fit`}
    >
      <div>
        <div className="max-w-md relative flex flex-col p-4  rounded-md text-black bg-white border-solid border-2 border-sky-200 hover:border-[#7747ff] ">
          <div className="text-2xl  font-bold mb-1 text-[#1e0e4b]  text-center">
            Create New Learning <span className="text-[#7747ff]">Topic</span>
          </div>

          <form className="flex flex-col mt-3 gap-3">
            <div className="block relative">
              <div>
                <label className="block text-gray-900 font-bold cursor-text text-md leading-[140%] mb-1">
                  Modules
                </label>
                <select
                  required
                  className="block text-black p-2 w-52 cursor-text text-sm leading-[140%] font-normal mb-1"
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

              <label className="block text-gray-600 cursor-text text-md leading-[140%] font-bold mb-1">
                Topic Name
              </label>
              <input
                type="text"
                placeholder={"Enter Topic Name"}
                value={topic_name}
                onChange={(e) => setTopicName(e.target.value)}
                required
                className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-8 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-sky-500 outline-0 mb-1"
              />

              <label className="block text-gray-600 cursor-text text-md leading-[140%] font-bold mb-2">
                Description
              </label>
              <input
                type="text"
                placeholder={"Enter Description"}
                value={description}
                required
                onChange={(e) => setDescription(e.target.value)}
                className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-8 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-sky-500  outline-0"
              />
            </div>

            <div className="block relative">
              <label className="block text-gray-600 cursor-text text-md leading-[140%] font-bold mb-2">
                Ref Link
              </label>
              <input
                type="url"
                placeholder={"Enter Reference Link"}
                value={reference_link}
                required
                onChange={(e) => setReferenceLink(e.target.value)}
                className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-8 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-sky-500 outline-0"
              />
            </div>

            <button
              type="submit"
              className="bg-sky-500 w-max m-auto px-6 py-2 rounded text-white text-sm font-bold hover:bg-[#7747ff]"
              onClick={handelSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateNewTopic;
