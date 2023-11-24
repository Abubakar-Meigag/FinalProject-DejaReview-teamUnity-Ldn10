const db = require("../database/db");

const getAllDataForAllModulesPage = async (req, res) => {
  // +DISTINCT ON (modules.name)
  const query = `SELECT 
  modules.id AS module_id,
  modules.name AS module_name,
  modules.description AS module_description,
  topics.id AS topic_id,
  topics.module_id,
  topics.topic_name,
  topics.description AS topic_description,
  topics.reference_link,
  topics.test_link
  FROM topics
  INNER JOIN modules
  ON modules.id = topics.module_id
  `;
  // const query = `
  //   SELECT json_arrayagg(
  //     json_object(
  //         'module_id', modules.id,
  //         'module_name', modules.name,
  //         'module_description', modules.description,
  //         'topics', (
  //             SELECT json_arrayagg(
  //                 json_object(
  //                     'topic_id', topics.id,
  //                     'topic_name', topics.topic_name,
  //                     'topic_description', topics.description
  //                 )
  //             )
  //             FROM topics
  //             WHERE modules.id = topics.module_id
  //          )
  //     )
  // ) res
  // FROM modules`;

  try {
    const data = await db.query(query);
    const unSortedData = data.rows; // Assuming data.rows is an array of objects
    const modulesData = {};

    // Iterate through the provided data and organize it
    unSortedData.forEach((item) => {
      const moduleId = item.module_id;
      const topic = {
        topic_id: item.topic_id,
        topic_name: item.topic_name,
        topic_description: item.topic_description,
        reference_link: item.reference_link,
        test_link: item.test_link,
      };

      if (!modulesData[moduleId]) {
        modulesData[moduleId] = {
          module_id: moduleId,
          module_name: item.module_name,
          module_description: item.module_description,
          topics: [topic],
        };
      } else {
        modulesData[moduleId].topics.push(topic);
      }
    });

    // Convert the modulesData object to an array of objects
    const sortedData = Object.values(modulesData);
    res.status(200).json(sortedData);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      result: "fail",
      message: "Error fetching or processing data",
    });
  }
};
module.exports = getAllDataForAllModulesPage;
