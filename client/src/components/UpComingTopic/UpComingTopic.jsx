const UpComingTopic = ({ userTopics }) => {
  const firstThreeTopics = userTopics.slice(0, 3);

  return (
    <div className="w-11/12 p-3 flex flex-col rounded-md bg-indigo-100">
      <div className="flex flex-col gap-6">
        {firstThreeTopics.map((topic) => (
          <div
            className="flex justify-between p-2 rounded-lg shadow-lg bg-white"
            key={topic.entry_id}
          >
            <div>
              <p className="pb-1 border-2 border-solid border-t-transparent border-r-transparent border-l-transparent font-bold text-sm text-main">
                {topic.module_name}
              </p>
              <h3 className="text-lg font-semibold text-1xl truncate w-[165px]">
                {topic.topic_name}
              </h3>
            </div>
            <div>
              <h2 className="text-main font-semibold">
                {new Date(topic.due_date).toDateString()}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpComingTopic;
/* <span className="mb-6 inline-block h-1 w-[100px] rounded bg-main"></span> */
