const UpComingTopic = ({ userTopics }) => {
  const firstThreeTopics = userTopics.slice(0, 3);

  return (
    <div className="w-full p-3 flex flex-col rounded-md bg-indigo-100 gap-1">
      <h1 className="text-3xl font-bold pb-6 ">
        UPCOMING
        <span className="font-bold text-blue-700"> TOPICS</span>
      </h1>
      <div className="flex flex-col gap-6">
        {firstThreeTopics.map((topic) => (
          <div
            className="flex lg:w-[24rem] justify-between p-2 rounded-lg shadow-lg bg-white"
            key={topic.entry_id}
          >
            <div className="w-7/12">
              <p
                style={{ color: topic.module_color }}
                className="pb-1 border-2 border-solid border-t-transparent border-r-transparent border-l-transparent font-bold text-sm text-main"
              >
                {topic.module_name}
              </p>
              <h3 className="text-lg font-semibold text-1xl truncate w-[200px]">
                {topic.topic_name}
              </h3>
            </div>
            <div>
              <h2 className="text-accent font-semibold">
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
