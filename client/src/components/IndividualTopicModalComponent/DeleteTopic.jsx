// import { useState } from "react";
// import { backEndLink } from "./config/config";

// export default function DeleteVideo({ topic, onClose }) {
//   const [topicID] = useState(topic.entry_id);

//   async function handleDelete() {
//     try {
//       const response = await fetch(
//         `${backEndLink}/deleteTopic?sub=${topicID}`,
//         {
//           method: "DELETE",
//         }
//       );
//       console.log("handleDelete response:", response);

//       const json = await response.json();
//       console.log("handleDelete json:", json);
//       onClose();
//     } catch (error) {
//       console.log("handleDelete error:", error);
//     }
//   }

//   return (
//     <div>
//       <button
//         onClick={handleDelete}
//         type="button"
//         className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//       >
//         DELETE
//       </button>
//     </div>
//   );
// }
