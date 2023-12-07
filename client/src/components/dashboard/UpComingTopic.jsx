import "./UpComingTopic.css";

const UpComingTopic = ({ userTopics }) => {
  const firstThreeTopics = userTopics.slice(0, 3);
  return (
    <div className="up-coming-topic-container">
      <h2 className="text-2xl text-white font-bold">
        Up Coming <span className="text-[#77D5C8]">Topics</span>
      </h2>

      {firstThreeTopics.map((topic) => (
        <div className="up-coming-topic-item " key={topic.entry_id}>
          <h3>{topic.topic_name}</h3>
          <h2>{new Date(topic.due_date).toDateString()}</h2>
        </div>
      ))}
    </div>
  );
};

export default UpComingTopic;
