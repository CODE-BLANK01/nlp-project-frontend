// import { useState } from "react";
// import Sidebar from "../components/Sidebar";
// import ChatWindow from "../components/ChatWindow";
// import { motion } from "framer-motion";

// export default function ChatApp() {
//   const [messages, setMessages] = useState([
//     { sender: "jarvis", text: "Welcome back 👋 How can I help today?" },
//   ]);
//   const [loading, setLoading] = useState(false);

//   const API_URL = import.meta.env.VITE_API_URL;
//   const TENANT = import.meta.env.VITE_TENANT;

//   const sendMessage = async (text) => {
//     setMessages((prev) => [...prev, { sender: "user", text }]);
//     setLoading(true);

//     try {
//       const res = await fetch(`${API_URL}/ask`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "Authorization": `Bearer ${localStorage.getItem("token")}`,
//           "X-Tenant": TENANT,
//         },
//         credentials: "include",
//         body: JSON.stringify({ question: text }),
//       });

//       const data = await res.json();

//       if (data.ok) {
//         if (data.summary) {
//           setMessages((prev) => [...prev, { sender: "jarvis", text: data.summary }]);
//         }
//         if (data.steps?.length) {
//           setMessages((prev) => [...prev, { sender: "jarvis", type: "steps", options: data.steps }]);
//         }
//         if (data.sources?.length) {
//           setMessages((prev) => [...prev, { sender: "jarvis", type: "sources", options: data.sources }]);
//         }
//         if (data.clarifying_questions?.length) {
//           setMessages((prev) => [...prev, { sender: "jarvis", type: "clarify", options: data.clarifying_questions }]);
//         }
//       } else {
//         setMessages((prev) => [...prev, { sender: "jarvis", text: "⚠️ " + data.error }]);
//       }
//     } catch {
//       setMessages((prev) => [...prev, { sender: "jarvis", text: "❌ Network error, please try again." }]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex h-screen overflow-hidden bg-gray-50">
//       <Sidebar />

//       <div className="flex flex-col flex-1 h-screen">
//         <motion.div
//           initial={{ y: -20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           className="px-6 py-4 border-b bg-white shadow-sm flex justify-between items-center"
//         >
//           <h2 className="text-lg font-semibold">Jarvis Assistant</h2>
//           <span className="text-xs text-gray-500">Tenant: {TENANT}</span>
//         </motion.div>

//         <div className="flex-1 min-h-0">
//           <ChatWindow messages={messages} onSend={sendMessage} loading={loading} />
//         </div>
//       </div>
//     </div>
//   );
// }

// // ChatApp.jsx
// import { useState } from "react";
// import Sidebar from "../components/Sidebar";
// import ChatWindow from "../components/ChatWindow";
// import { motion } from "framer-motion";

// export default function ChatApp() {
//   const [messages, setMessages] = useState([
//     { sender: "jarvis", text: "Welcome back 👋 How can I help today?" },
//   ]);
//   const [loading, setLoading] = useState(false);
//   const API_URL = import.meta.env.VITE_API_URL;
//   const TENANT = import.meta.env.VITE_TENANT;

//   const sendMessage = async (text) => {
//     setMessages((prev) => [...prev, { sender: "user", text }]);
//     setLoading(true);

//     try {
//       const res = await fetch(`${API_URL}/ask`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "Authorization": `Bearer ${localStorage.getItem("token")}`,
//           "X-Tenant": TENANT,
//         },
//         credentials: "include",
//         body: JSON.stringify({ question: text }),
//       });
      
//       const data = await res.json();
      
//       if (data.ok) {
//         // Send the entire structured answer as one message
//         setMessages((prev) => [
//           ...prev,
//           {
//             sender: "jarvis",
//             type: "structured_answer",
//             data: {
//               what_this_does: data.what_this_does,
//               who_should_do_this: data.who_should_do_this,
//               summary: data.summary,
//               prerequisites: data.prerequisites || [],
//               configuration_steps: data.configuration_steps || [],
//               usage_steps: data.usage_steps || [],
//               important_notes: data.important_notes || [],
//               example_scenario: data.example_scenario,
//               related_topics: data.related_topics || [],
//               confidence: data.confidence,
//               sources: data.sources || [],
//               clarifying_questions: data.clarifying_questions || [],
//               detected_ambiguity: data.detected_ambiguity,
//             },
//           },
//         ]);
//       } else {
//         setMessages((prev) => [...prev, { sender: "jarvis", text: "⚠️ " + data.error }]);
//       }
//     } catch {
//       setMessages((prev) => [...prev, { sender: "jarvis", text: "❌ Network error, please try again." }]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex h-screen overflow-hidden bg-gray-50">
//       <Sidebar />
//       <div className="flex flex-col flex-1 h-screen">
//         <motion.div
//           initial={{ y: -20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           className="px-6 py-4 border-b bg-white shadow-sm flex justify-between items-center"
//         >
//           <h2 className="text-lg font-semibold">Jarvis Assistant</h2>
//           <span className="text-xs text-gray-500">Tenant: {TENANT}</span>
//         </motion.div>
//         <div className="flex-1 min-h-0">
//           <ChatWindow messages={messages} onSend={sendMessage} loading={loading} />
//         </div>
//       </div>
//     </div>
//   );
// }

// ChatApp.jsx
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import ChatWindow from "../components/ChatWindow";
import { motion } from "framer-motion";

export default function ChatApp() {
  const [messages, setMessages] = useState([
    { sender: "ellie", text: "Welcome back 👋 How can I help today?" },
  ]);
  const [loading, setLoading] = useState(false);
  const API_URL = import.meta.env.VITE_API_URL;
  const TENANT = import.meta.env.VITE_TENANT;

  const sendMessage = async (text) => {
    setMessages((prev) => [...prev, { sender: "user", text }]);
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/ask`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
          "X-Tenant": TENANT,
        },
        credentials: "include",
        body: JSON.stringify({ question: text }),
      });

      const data = await res.json();

      if (data.ok) {
        setMessages((prev) => [
          ...prev,
          {
            sender: "ellie",
            type: "structured_answer",
            data: {
              answer: data.answer,
              main_steps: data.main_steps || [],
              prerequisites: data.prerequisites || [],
              important_notes: data.important_notes || [],
              related_topics: data.related_topics || [],
              clarification_note: data.clarification_note || "",
              for_admins: data.for_admins || false,
              confidence: data.confidence,
              // sources: data.sources || [],
            },
          },
        ]);
      } else {
        setMessages((prev) => [...prev, { sender: "ellie", text: "⚠️ " + data.error }]);
      }
    } catch {
      setMessages((prev) => [...prev, { sender: "ellie", text: "❌ Network error, please try again." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <Sidebar />
      <div className="flex flex-col flex-1 h-screen">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="px-6 py-4 border-b bg-white shadow-sm flex justify-between items-center"
        >
          <h2 className="text-lg font-semibold">Ellie your Workday Assistant</h2>
          <span className="text-xs text-gray-500">Tenant: {TENANT}</span>
        </motion.div>
        <div className="flex-1 min-h-0">
          <ChatWindow messages={messages} onSend={sendMessage} loading={loading} />
        </div>
      </div>
    </div>
  );
}