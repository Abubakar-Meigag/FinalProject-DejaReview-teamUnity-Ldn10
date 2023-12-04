import "./UpComingTopic.css";

const UpComingTopic = ({ userTopics }) => {
  const firstThreeTopics = userTopics.modules.slice(0, 3);
  return (
    <div className="up-coming-topic-container">
      <h2>UP COMING TOPICS</h2>

      {firstThreeTopics.map((topic) => (
        <div className="up-coming-topic-item" key={topic.entry_id}>
          <h3>{topic.topic_name}</h3>
          <h2>{new Date(topic.due_date).toDateString()}</h2>
        </div>
      ))}
    </div>
  );
};

export default UpComingTopic;
