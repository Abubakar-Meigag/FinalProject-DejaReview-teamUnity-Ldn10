import "./UpComingTopic.css";

const UpComingTopic = ({ userTopics }) => {
  const firstThreeTopics = userTopics.modules.slice(0, 3);
  return (
    <div className="up-coming-topic-container">
      <h2 className="text-2xl font-bold">
        Up Coming <span className="text-[#7747ff]">Topics</span>
      </h2>

      {firstThreeTopics.map((topic) => (
        <div className="up-coming-topic-item border-2 border-sky-200 hover:border-[#7747ff] " key={topic.entry_id}>
          <h3>{topic.topic_name}</h3>
          <h2>{new Date(topic.due_date).toDateString()}</h2>
        </div>
      ))}
    </div>
  );
};

export default UpComingTopic;
