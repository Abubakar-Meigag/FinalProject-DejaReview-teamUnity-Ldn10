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
          "topicRef": "www.HTML-CSS.com"
        },
        {
          "topicId": 2,
          "topicName": "Forms • Structuring Data",
          "topicRef": "www.HTML-CSS.com"
        },
        {
          "topicId": 3,
          "topicName": "Layout • FlexBox • Grid",
          "topicRef": "www.HTML-CSS.com"
        },
        {
          "topicId": 3,
          "topicName": "Ship it • Putting it all together",
          "topicRef": "www.HTML-CSS.com"
        }
      ]
    },
    {
      "id": 2,
      "moduleName": "JavaScript_1",
      "topics": [
        {
          "topicId": 1,
          "topicName": "variables, strings, types, numbers, statements, expressions, functions",
          "topicRef": "www.JavaScript.com"
        },
        {
          "topicId": 2,
          "topicName": "Logic and Loops",
          "topicRef": "www.JavaScript.com"
        },
        {
          "topicId": 3,
          "topicName": "Logic and Arrays",
          "topicRef": "www.JavaScript.com"
        },
        {
          "topicId": 4,
          "topicName": "Array methods and higher order functions",
          "topicRef": "www.JavaScript.com"
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
          "topicRef": "www.JavaScript.com"
        },
        {
          "topicId": 2,
          "topicName": "TDD, arrays of Objects",
          "topicRef": "www.JavaScript.com"
        },
        {
          "topicId": 3,
          "topicName": "JS in the Browser (DOM, and AJAX)",
          "topicRef": "www.JavaScript.com"
        },
        {
          "topicId": 4,
          "topicName": "More JS in the Browser",
          "topicRef": "www.JavaScript.com"
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
          "topicRef": "www.JavaScript.com"
        },
        {
          "topicId": 2,
          "topicName": "Fetch, AJAX, APIS",
          "topicRef": "www.JavaScript.com"
        },
        {
          "topicId": 3,
          "topicName": "Scope & this",
          "topicRef": "www.JavaScript.com"
        },
        {
          "topicId": 4,
          "topicName": "Growth Mindset",
          "topicRef": "www.JavaScript.com"
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
          "topicRef": "www.React.com"
        },
        {
          "topic_id": 2,
          "topicName": "Reacting to Changes",
          "topicRef": "www.React.com"
        },
        {
          "topicId": 3,
          "topicName": "Fetching Data",
          "topicRef": "www.React.com"
        },
        {
          "topicId": 4,
          "topicName": "To be produced",
          "topicRef": "www.React.com"
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
          "topicRef": "www.Node.com"
        },
        {
          "topicId": 2,
          "topicName": "Templating",
          "topicRef": "www.Node.com"
        },
        {
          "topicId": 3,
          "topicName": "Node Best Practices",
          "topicRef": "www.Node.com"
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
          "topicRef": "www.SQL.com"
        },
        {
          "topicId": 2,
          "topicName": "More SQL and integration with NodeJS",
          "topicRef": "www.SQL.com"
        },
        {
          "topicId": 3,
          "topicName": "More integration with NodeJS",
          "topicRef": "www.SQL.com"
        }
      ]
    }
  ]
}

const [userModules, setUserModules] = useState(modulesData);

let rowNumber = 0;
let userName = 'User';

  return (
    <div className="p-4 bg-gray-900">
      <h2 className="text-3xl mb-4 text-white">Hi {userName}! Welcome to your personal dashboard for space repetition!</h2>
      <p className="text-white">
        This dashboard is designed to help you review and retain information effectively using the space repetition method.
      </p>

      <section>
        <h3 className="text-2xl mb-2 text-white">Topics</h3>
        <table className="w-full border border-collapse border-gray-300 bg-gray-800 text-white">
          <thead className="bg-gray-900">
            <tr>
              <th className="border-b p-3 font-bold">#</th>
              <th className="border-b p-3 font-bold">Module Name</th>
              <th className="border-b p-3 font-bold">Topic Name</th>
              <th className="border-b p-3 font-bold">Topic Reference</th>
              <th className="border-b p-3 font-bold">1 Week</th>
              <th className="border-b p-3 font-bold">1 Month</th>
              <th className="border-b p-3 font-bold">3 Months</th>
              <th className="border-b p-3 font-bold">6 Months</th>
              <th className="border-b p-3 font-bold">Edit</th>
            </tr>
          </thead>
          <tbody>
            {userModules.modules.map((module) =>
              module.topics.map((topic) => (
                <tr key={topic.topicId} className="hover:bg-gray-400">
                  <td className="border-b p-3">{++rowNumber}</td>
                  <td className="border-b p-3">{module.moduleName}</td>
                  <td className="border-b p-3">{topic.topicName}</td>
                  <td className="border-b p-3">{topic.topicRef}</td>
                  <td className="border-b p-3"><input type="checkbox" className="checkbox text-purple-500" /></td>
                  <td className="border-b p-3"><input type="checkbox" className="checkbox text-purple-500" /></td>
                  <td className="border-b p-3"><input type="checkbox" className="checkbox text-purple-500" /></td>
                  <td className="border-b p-3"><input type="checkbox" className="checkbox text-purple-500" /></td>
                  <td className="border-b p-3 cursor-pointer text-purple-500 hover:text-purple-700">
                    Edit
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </section>
    </div>
  );
};


export default PersonalDashboard;


