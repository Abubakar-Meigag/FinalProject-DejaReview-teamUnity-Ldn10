import React, {useState} from "react";

const PersonalDashboard = () => {

const modulesData = {
  "modules": [
    {
      "id": 1,
      "moduleName": "HTML-CSS",
      "topics": [
       {
          "topicId": 1,
          "topicName": "Fundamentals • Semantics",
          "topicRef": "www.HTML-CSS.com",
          "dueDate": "2023-11-25" 
        },
        {
          "topicId": 2,
          "topicName": "Forms • Structuring Data",
          "topicRef": "www.HTML-CSS.com",
          "dueDate": "2023-11-26" 
        },
        {
          "topicId": 3,
          "topicName": "Layout • FlexBox • Grid",
          "topicRef": "www.HTML-CSS.com",
          "dueDate": "2023-11-27" 
        },
        {
          "topicId": 4,
          "topicName": "Ship it • Putting it all together",
          "topicRef": "www.HTML-CSS.com",
          "dueDate": "2023-11-28"
        },
      ]
    },
    {
      "id": 2,
      "moduleName": "JavaScript_1",
      "topics": [
        {
          "topicId": 1,
          "topicName": "variables, strings, types, numbers, statements, expressions, functions",
          "topicRef": "www.JavaScript.com",
          "dueDate": "2023-11-30"
        },
        {
          "topicId": 2,
          "topicName": "Logic and Loops",
          "topicRef": "www.JavaScript.com",
          "dueDate": "2023-12-03"
        },
        {
          "topicId": 3,
          "topicName": "Logic and Arrays",
          "topicRef": "www.JavaScript.com",
          "dueDate": "2023-12-11"
        },
        {
          "topicId": 4,
          "topicName": "Array methods and higher order functions",
          "topicRef": "www.JavaScript.com",
          "dueDate": "2023-12-10"
        }
      ]
    },
    {
      "id": 3,
      "moduleName": "JavaScript_2",
      "topics": [
        {
          "topicId": 1,
          "topicName": "Objects",
          "topicRef": "www.JavaScript.com",
          "dueDate": "2023-11-27"
        },
        {
          "topicId": 2,
          "topicName": "TDD, arrays of Objects",
          "topicRef": "www.JavaScript.com",
          "dueDate": "2023-12-05"
        },
        {
          "topicId": 3,
          "topicName": "JS in the Browser (DOM, and AJAX)",
          "topicRef": "www.JavaScript.com",
          "dueDate": "2023-12-25"
        },
        {
          "topicId": 4,
          "topicName": "More JS in the Browser",
          "topicRef": "www.JavaScript.com",
          "dueDate": "2023-12-13"
        }
      ]
    },
    {
      "id": 4,
      "moduleName": "JavaScript_3",
      "topics": [
        {
          "topicId": 1,
          "topicName": "Debugging",
          "topicRef": "www.JavaScript.com",
          "dueDate": "2023-12-21"
        },
        {
          "topicId": 2,
          "topicName": "Fetch, AJAX, APIS",
          "topicRef": "www.JavaScript.com",
          "dueDate": "2023-12-14"
        },
        {
          "topicId": 3,
          "topicName": "Scope & this",
          "topicRef": "www.JavaScript.com",
          "dueDate": "2023-12-18"
        },
        {
          "topicId": 4,
          "topicName": "Growth Mindset",
          "topicRef": "www.JavaScript.com",
          "dueDate": "2023-12-28"
        }
      ]
    },
    {
      "id": 5,
      "moduleName": "ReactJS",
      "topics": [
        {
          "topicId": 1,
          "topicName": "React 101",
          "topicRef": "www.React.com",
          "dueDate": "2024-01-06"
        },
        {
          "topic_id": 2,
          "topicName": "Reacting to Changes",
          "topicRef": "www.React.com",
          "dueDate": "2024-01-03"
        },
        {
          "topicId": 3,
          "topicName": "Fetching Data",
          "topicRef": "www.React.com",
          "dueDate": "2024-01-11"
        },
        {
          "topicId": 4,
          "topicName": "To be produced",
          "topicRef": "www.React.com",
          "dueDate": "2024-02-14"
        }
      ]
    },
    {
      "id": 6,
      "moduleName": "Node Express",
      "topics": [
        {
          "topicId": 1,
          "topicName": "Node, Express workshop",
          "topicRef": "www.Node.com",
          "dueDate": "2024-01-17"
        },
        {
          "topicId": 2,
          "topicName": "Templating",
          "topicRef": "www.Node.com",
          "dueDate": "2024-01-20"
        },
        {
          "topicId": 3,
          "topicName": "Node Best Practices",
          "topicRef": "www.Node.com",
          "dueDate": "2024-01-15"
        }
      ]
    },
    {
      "id": 7,
      "moduleName": "SQL",
      "topics": [
        {
          "topicId": 1,
          "topicName": "Introduction to SQL",
          "topicRef": "www.SQL.com",
          "dueDate": "2024-02-02"
        },
        {
          "topicId": 2,
          "topicName": "More SQL and integration with NodeJS",
          "topicRef": "www.SQL.com",
          "dueDate": "2024-02-10"
        },
        {
          "topicId": 3,
          "topicName": "More integration with NodeJS",
          "topicRef": "www.SQL.com",
          "dueDate": "2024-02-14"
        }
      ]
    }
  ]
}

const [userModules, setUserModules] = useState(modulesData);

const sortByDueDateTopics = [].concat(...userModules.modules.map((module) => module.topics))
  .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));



let rowNumber = 0;


  return (
  <div className="p-4 bg-dark-purple">
    <table className="w-full border border-collapse border-gray-300 bg-sky-900 text-white">
      <thead className="bg-amber-300 text-black">
        <tr>
          <th className="border-b p-3 font-bold text-center">#</th>
          <th className="border-b p-3 font-bold text-center">Topic Name</th>
          <th className="border-b p-3 font-bold text-center">Module</th>
          <th className="border-b p-3 font-bold text-center">Link</th>
          <th className="border-b p-3 font-bold text-center">Due Date</th>
        </tr>
      </thead>
      <tbody>
        {sortByDueDateTopics.map((topic) => (
          <tr key={topic.topicId} className="hover:bg-amber-300">
            <td className="border-b p-3 text-center">{++rowNumber}</td>
            <td className="border-b p-3 text-center">{topic.topicName}</td>
            <td className="border-b p-3 text-center">{modulesData.modules.find((module) =>
                module.topics.some((t) => t.topicId === topic.topicId)
              ).moduleName}</td>
            <td className="border-b p-3 text-center">{topic.topicRef}</td>
            <td className="border-b p-3 text-center">{topic.dueDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
}


export default PersonalDashboard;


