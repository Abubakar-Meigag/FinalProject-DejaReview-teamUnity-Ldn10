const UpComingTopic = ({ userTopics }) => {
  const firstThreeTopics = userTopics.slice(0, 3);
  return (
    <div className="w-full flex flex-col px-12 py-8 rounded-2xl bg-mycream">
      <div className=" text-2xl mb-3 text-center ">
        UPCOMING
        <span className="font-bold text-mypurple"> TOPIC</span>
        <br></br>
        <span className="bg-base-100 mx-auto mb-6 inline-block h-1 w-[100px] rounded"></span>
      </div>
      <div className="flex flex-col  gap-3">
        {firstThreeTopics.map((topic) => (
          <div
            className="flex justify-between p-1 border-2 border-solid rounded-md border-myturquoise bg-white"
            key={topic.entry_id}
          >
            <div>
              <p className="pb-1 border-2 border-solid  border-t-transparent border-r-transparent border-l-transparent border-b-base-100 font-bold text-sm text-mypurple">
                {topic.module_name}
              </p>
              <h3 className="border-4 text-1xl">{topic.topic_name}</h3>
            </div>
            <h2 className="flex items-center justify-center w-10 h-10 bg-mypurple text-white border-2 rounded-md">
              {new Date(topic.due_date).toLocaleDateString("en-US", {
                weekday: "short",
              })}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpComingTopic;
