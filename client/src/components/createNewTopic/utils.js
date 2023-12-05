export const addTopicToDashboard = async (topicData) => {
  try {
    const request = await fetch(`http://localhost:5005/allModulesPage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(topicData),
    });
    console.log("handleSubmit response:", request);

    const json = await request.json();
    console.log("handleAddingTopic json:", json);
  } catch (error) {
    console.log(console.log("handleAddingTopic error:", error));
  }
};
