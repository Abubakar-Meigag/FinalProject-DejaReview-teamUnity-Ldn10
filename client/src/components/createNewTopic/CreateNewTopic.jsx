import React, { useState, useEffect } from "react";
import axios from "axios";
import { addTopicToDashboard } from "./utils";
// import { useSession } from "@supabase/auth-helpers-react";

const CreateNewTopic = ({ session, getUsersTopics }) => {
  const [modules, setModules] = useState([]);
  const [formData, setFormData] = useState({
    topic_name: "",
    description: "",
    reference_link: "",
    selectedModuleId: "",
  });

  const userID = session.user.id;

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.selectedModuleId ||
      !formData.topic_name ||
      !formData.description ||
      !formData.reference_link
    ) {
      alert("You must fill all the required fields");
      return;
    }

    const personalNewTopicData = {
      module_id: formData.selectedModuleId,
      topic_name: formData.topic_name,
      description: formData.description,
      reference_link: formData.reference_link,
      is_user_generated: true,
      userId: userID,
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
      await addTopicToDashboard({ userId: userID, topicId: response.id });

      getUsersTopics();

      setFormData({
        topic_name: "",
        description: "",
        reference_link: "",
        selectedModuleId: "",
      });
      createCalendarEvent();
    } catch (err) {
      console.error(err.message);
    }
  };

  async function createCalendarEvent() {
    try {
      console.log("Creating calendar event");

      const currentDate = new Date();
      const startDateTime = new Date(
        currentDate.getTime() + 7 * 24 * 60 * 60 * 1000
      );
      const endDateTime = new Date(
        startDateTime.getTime() + 3 * 60 * 60 * 1000
      );

      const event = {
        summary: formData.topic_name,
        description: formData.description,
        start: {
          dateTime: startDateTime.toISOString(),
          timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        },
        end: {
          dateTime: endDateTime.toISOString(),
          timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        },
      };
      const request = await fetch(
        "https://www.googleapis.com/calendar/v3/calendars/primary/events",
        {
          method: "POST",
          headers: {
            Authorization: "Bearer " + session.provider_token, // Access token for google
          },
          body: JSON.stringify(event),
        }
      );
      const response = await request.json();

      console.log(response);
      alert("Event created, check your Google Calendar!");
    } catch (error) {
      console.error("Error updating due date:", error);
    }
  }

  return (
    <div className="w-[28rem]  flex flex-col px-6 py-2 rounded-2xl bg-gray-100 border-1 border-solid border-teal-500 hover:border-purple-400">
      <div className=" text-2xl mb-1 mt-5 text-center">
        CREATE NEW <span className="font-bold text-mypurple">TOPIC</span>
        <br></br>
        <span className=" mb-6 inline-block h-1 w-[100px] rounded bg-mypurple"></span>
      </div>

      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <div className="block relative">
          <div>
            <label className="block cursor-text text-md leading-[140%] mb-1">
              Modules
            </label>
            <select
              required
              name="selectedModuleId"
              value={formData.selectedModuleId}
              onChange={handleChange}
              className="block p-2 w-full cursor-text text-sm leading-[140%] font-normal mb-1 bg-white bg-opacity-80 border-2 border-solid border-myturquoise rounded-md"
            >
              <option value="">Choose module...</option>
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
            name="topic_name"
            placeholder={"Enter Topic"}
            value={formData.topic_name}
            onChange={handleChange}
            required
            className="block p-2 text-sm w-full font-normal leading-[18px] tracking-[0px] appearance-none focus:ring-2 ring-offset-2 ring-sky-500 outline-0 mb-1 bg-white bg-opacity-80 border-2 border-solid border-myturquoise rounded-md"
          />

          <label className="block cursor-text text-md leading-[140%] mb-2">
            Description
          </label>
          <input
            type="text"
            name="description"
            placeholder={"Enter Description"}
            value={formData.description}
            required
            onChange={handleChange}
            className="block p-2 text-sm w-full font-normal leading-[18px] tracking-[0px] appearance-none focus:ring-2 ring-offset-2 ring-sky-500 outline-0 mb-1 bg-white bg-opacity-80 border-2 border-solid border-myturquoise rounded-md"
          />
        </div>

        <div className="block relative">
          <label className="block cursor-text text-md leading-[140%] mb-2">
            Reference Link
          </label>
          <input
            type="text"
            name="reference_link"
            placeholder={"Enter Reference Link"}
            value={formData.reference_link}
            required
            onChange={handleChange}
            className="block p-2 text-sm w-full font-normal leading-[18px] tracking-[0px] appearance-none focus:ring-2 ring-offset-2 ring-sky-500 outline-0 mb-1 bg-white bg-opacity-80 border-2 border-solid border-myturquoise rounded-md"
          />
        </div>

        <button
          type="submit"
          className="bg-myturquoise m-auto w-max px-8 py-2 rounded text-white text-m font-semibold hover:bg-mypurple"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateNewTopic;
