const UpComingTopic = ({ userTopics }) => {
  const firstThreeTopics = userTopics.slice(0, 3);

  return (
    <div className="w-[28rem] flex flex-col px-6 py-6 rounded-2xl bg-gray-100 border-1 border-solid border-main hover:border-green">
      <div className=" text-2xl mb-1 text-center ">
        UPCOMING
        <span className="font-bold text-main"> TOPICS</span>
        <br></br>
        <span className="mb-6 inline-block h-1 w-[100px] rounded bg-main"></span>
      </div>
      <div className="flex flex-col  gap-6">
        {firstThreeTopics.map((topic) => (
          <div
            className="flex justify-between p-3 border-2 border-solid rounded-md border-babyBlue bg-secondary"
            key={topic.entry_id}
          >
            <div>
              <p className="pb-1 border-2 border-solid border-t-transparent border-r-transparent border-l-transparent font-bold text-sm text-main">
                {topic.module_name}
              </p>
              <h3 className="border-4 text-1xl truncate w-[165px]">
                {topic.topic_name}
              </h3>
            </div>
            <h2 className="flex items-center justify-center text-main font-semibold rounded-md">
              {new Date(topic.due_date).toDateString()}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpComingTopic;
