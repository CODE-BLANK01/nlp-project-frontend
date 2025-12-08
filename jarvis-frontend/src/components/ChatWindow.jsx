// import { useState, useEffect, useRef } from "react";
// import { Button } from "./ui/Button";
// import { Input } from "./ui/Input";
// import { motion } from "framer-motion";

// export default function ChatWindow({ messages, onSend, loading }) {
//   const [input, setInput] = useState("");
//   const bottomRef = useRef(null);

//   const sendMessage = () => {
//     if (!input.trim()) return;
//     onSend(input);
//     setInput("");
//   };

//   useEffect(() => {
//     bottomRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages, loading]);

//   return (
//     <div className="flex flex-col h-full bg-white">
//       <div className="flex-1 overflow-y-auto p-8 space-y-6">
//         {messages.map((m, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.3 }}
//             className={`max-w-xl px-4 py-3 rounded-2xl shadow-sm text-sm leading-relaxed ${
//               m.sender === "user"
//                 ? "ml-auto bg-black text-white hover:bg-gray-800 transition-colors"
//                 : "mr-auto bg-gray-100 text-gray-900 hover:bg-gray-200 transition-colors"
//             }`}
//           >
//             {m.text && <p className="whitespace-pre-line">{m.text}</p>}

//             {m.type === "steps" && m.options?.length > 0 && (
//               <ul className="mt-3 space-y-2">
//                 {m.options.map((step, idx) => (
//                   <li key={idx} className="flex items-start gap-2 p-2 rounded-lg bg-white text-black border text-sm hover:bg-gray-50 transition">
//                     <span className="text-green-600 font-bold">✓</span>
//                     <span>{step}</span>
//                   </li>
//                 ))}
//               </ul>
//             )}

//             {m.type === "sources" && m.options?.length > 0 && (
//               <div className="mt-3 flex flex-wrap gap-2">
//                 {m.options.map((src, idx) => (
//                   <span
//                     key={idx}
//                     className="px-3 py-1 rounded-full bg-white border text-xs text-black shadow-sm hover:bg-gray-50 cursor-pointer"
//                   >
//                     {src}
//                   </span>
//                 ))}
//               </div>
//             )}

//             {m.type === "clarify" && m.options?.length > 0 && (
//               <div className="mt-3 flex flex-wrap gap-2">
//                 {m.options.map((opt, idx) => (
//                   <Button
//                     key={idx}
//                     variant="secondary"
//                     className="text-xs px-3 py-1"
//                     onClick={() => onSend(opt)}
//                   >
//                     {opt}
//                   </Button>
//                 ))}
//               </div>
//             )}
//           </motion.div>
//         ))}

//         {loading && <TypingIndicator />}
//         <div ref={bottomRef} />
//       </div>

//       <div className="border-t p-4 flex items-center gap-3">
//         <Input
//           placeholder="Ask Jarvis anything..."
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//         />
//         <Button onClick={sendMessage} disabled={loading}>
//           Send
//         </Button>
//       </div>
//     </div>
//   );
// }

// function TypingIndicator() {
//   return (
//     <motion.div
//       className="mr-auto bg-gray-200 text-gray-700 px-4 py-2 rounded-2xl shadow-sm flex gap-1"
//       initial={{ opacity: 0.7 }}
//       animate={{ opacity: 1 }}
//     >
//       <span className="w-2 h-2 bg-gray-600 rounded-full animate-bounce [animation-delay:-0.3s]" />
//       <span className="w-2 h-2 bg-gray-600 rounded-full animate-bounce [animation-delay:-0.15s]" />
//       <span className="w-2 h-2 bg-gray-600 rounded-full animate-bounce" />
//     </motion.div>
//   );
// }

// // ChatWindow.jsx
// import { useState, useEffect, useRef } from "react";
// import { Button } from "./ui/Button";
// import { Input } from "./ui/Input";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronDown, ChevronUp, CheckCircle2, AlertCircle, Info, BookOpen, Users, Settings, PlayCircle } from "lucide-react";

// export default function ChatWindow({ messages, onSend, loading }) {
//   const [input, setInput] = useState("");
//   const bottomRef = useRef(null);

//   const sendMessage = () => {
//     if (!input.trim()) return;
//     onSend(input);
//     setInput("");
//   };

//   useEffect(() => {
//     bottomRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages, loading]);

//   return (
//     <div className="flex flex-col h-full bg-white">
//       <div className="flex-1 overflow-y-auto p-8 space-y-6">
//         {messages.map((m, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.3 }}
//             className={`max-w-4xl ${m.sender === "user" ? "ml-auto" : "mr-auto w-full"}`}
//           >
//             {m.sender === "user" ? (
//               <div className="px-4 py-3 rounded-2xl shadow-sm text-sm leading-relaxed bg-black text-white hover:bg-gray-800 transition-colors">
//                 {m.text}
//               </div>
//             ) : m.type === "structured_answer" ? (
//               <StructuredAnswer data={m.data} onSend={onSend} />
//             ) : (
//               <div className="px-4 py-3 rounded-2xl shadow-sm text-sm leading-relaxed bg-gray-100 text-gray-900 hover:bg-gray-200 transition-colors">
//                 {m.text}
//               </div>
//             )}
//           </motion.div>
//         ))}
//         {loading && <TypingIndicator />}
//         <div ref={bottomRef} />
//       </div>

//       <div className="border-t p-4 flex items-center gap-3">
//         <Input
//           placeholder="Ask Jarvis anything..."
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//         />
//         <Button onClick={sendMessage} disabled={loading}>
//           Send
//         </Button>
//       </div>
//     </div>
//   );
// }

// function StructuredAnswer({ data, onSend }) {
//   const [expandedSections, setExpandedSections] = useState({});
  
//   const toggleSection = (section) => {
//     setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
//   };

//   const getCriticalNote = () => {
//     // Find the most critical note (those starting with "Cannot", "Must", etc.)
//     return data.important_notes?.find(note => 
//       note.toLowerCase().includes("cannot") || 
//       note.toLowerCase().includes("must not") ||
//       note.toLowerCase().includes("required")
//     ) || data.important_notes?.[0] || null;
//   };

//   const getConfidenceColor = () => {
//     const level = data.confidence?.level?.toLowerCase();
//     if (level === "high") return "text-green-600 bg-green-50 border-green-200";
//     if (level === "medium") return "text-yellow-600 bg-yellow-50 border-yellow-200";
//     return "text-red-600 bg-red-50 border-red-200";
//   };

//   const getConfidenceDots = () => {
//     const level = data.confidence?.level?.toLowerCase();
//     const dots = level === "high" ? 5 : level === "medium" ? 3 : 1;
//     return "●".repeat(dots) + "○".repeat(5 - dots);
//   };

//   // Condense steps to show first 3-5
//   const getCondensedSteps = (steps) => {
//     if (!steps || steps.length === 0) return [];
//     const maxVisible = 3;
//     return steps.slice(0, maxVisible).map(step => {
//       // Condense to first sentence or ~80 chars
//       const firstSentence = step.split(/[.!?]/)[0];
//       return firstSentence.length > 80 ? firstSentence.substring(0, 77) + "..." : firstSentence;
//     });
//   };

//   const allSteps = [...(data.configuration_steps || []), ...(data.usage_steps || [])];
//   const condensedSteps = getCondensedSteps(allSteps);
//   const criticalNote = getCriticalNote();

//   return (
//     <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
//       {/* What This Does */}
//       {data.what_this_does && (
//         <div className="p-5 border-b bg-gradient-to-r from-blue-50 to-indigo-50">
//           <div className="flex items-start gap-3">
//             <div className="mt-0.5 p-2 bg-blue-100 rounded-lg">
//               <Info className="w-5 h-5 text-blue-600" />
//             </div>
//             <div className="flex-1">
//               <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">What This Does</h3>
//               <p className="text-base text-gray-800 leading-relaxed">{data.what_this_does}</p>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Quick Summary */}
//       {data.summary && (
//         <div className="p-5 border-b">
//           <div className="flex items-start gap-3">
//             <div className="mt-0.5 p-2 bg-gray-100 rounded-lg">
//               <BookOpen className="w-5 h-5 text-gray-600" />
//             </div>
//             <div className="flex-1">
//               <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Quick Answer</h3>
//               <p className="text-sm text-gray-700 leading-relaxed">{data.summary}</p>
              
//               {/* Critical Note */}
//               {criticalNote && (
//                 <div className="mt-3 p-3 bg-amber-50 border border-amber-200 rounded-lg flex items-start gap-2">
//                   <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
//                   <p className="text-sm text-amber-800">{criticalNote}</p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Who Does This */}
//       {data.who_should_do_this && (
//         <div className="p-5 border-b bg-gray-50">
//           <div className="flex items-start gap-3">
//             <div className="mt-0.5 p-2 bg-purple-100 rounded-lg">
//               <Users className="w-5 h-5 text-purple-600" />
//             </div>
//             <div className="flex-1">
//               <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Who Does This</h3>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                 {data.who_should_do_this.one_time_setup && 
//                  data.who_should_do_this.one_time_setup !== "Not applicable - no configuration required" && (
//                   <div className="flex items-start gap-2">
//                     <Settings className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
//                     <div>
//                       <p className="text-xs font-medium text-gray-500">Setup</p>
//                       <p className="text-sm text-gray-800">{data.who_should_do_this.one_time_setup}</p>
//                     </div>
//                   </div>
//                 )}
//                 {data.who_should_do_this.ongoing_usage && 
//                  data.who_should_do_this.ongoing_usage !== "Not applicable" && (
//                   <div className="flex items-start gap-2">
//                     <PlayCircle className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
//                     <div>
//                       <p className="text-xs font-medium text-gray-500">Usage</p>
//                       <p className="text-sm text-gray-800">{data.who_should_do_this.ongoing_usage}</p>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Condensed Main Steps */}
//       {condensedSteps.length > 0 && (
//         <div className="p-5 border-b">
//           <div className="flex items-start gap-3">
//             <div className="mt-0.5 p-2 bg-green-100 rounded-lg">
//               <CheckCircle2 className="w-5 h-5 text-green-600" />
//             </div>
//             <div className="flex-1">
//               <div className="flex items-center justify-between mb-3">
//                 <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Main Steps</h3>
//                 {allSteps.length > condensedSteps.length && (
//                   <button
//                     onClick={() => toggleSection('all_steps')}
//                     className="text-xs text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
//                   >
//                     {expandedSections.all_steps ? (
//                       <>Show Less <ChevronUp className="w-3 h-3" /></>
//                     ) : (
//                       <>Show All ({allSteps.length}) <ChevronDown className="w-3 h-3" /></>
//                     )}
//                   </button>
//                 )}
//               </div>
              
//               <ol className="space-y-2">
//                 {(expandedSections.all_steps ? allSteps : condensedSteps).map((step, idx) => (
//                   <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
//                     <span className="font-semibold text-gray-500 min-w-[1.5rem]">{idx + 1}.</span>
//                     <span className="leading-relaxed">{step}</span>
//                   </li>
//                 ))}
//               </ol>
              
//               {!expandedSections.all_steps && allSteps.length > condensedSteps.length && (
//                 <p className="text-xs text-gray-500 mt-2 ml-6">
//                   ... and {allSteps.length - condensedSteps.length} more step{allSteps.length - condensedSteps.length > 1 ? 's' : ''}
//                 </p>
//               )}
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Expandable Detail Sections */}
//       <div className="p-5 border-b bg-gray-50">
//         <h3 className="text-sm font-semibold text-gray-600 mb-3">📚 Need More Details?</h3>
//         <div className="flex flex-wrap gap-2">
//           {data.prerequisites && data.prerequisites.length > 0 && (
//             <DetailChip
//               label="Prerequisites"
//               badge={data.prerequisites.length}
//               expanded={expandedSections.prerequisites}
//               onClick={() => toggleSection('prerequisites')}
//             />
//           )}
//           {data.configuration_steps && data.configuration_steps.length > 0 && (
//             <DetailChip
//               label="Configuration"
//               badge="Admin"
//               badgeColor="bg-red-100 text-red-700"
//               expanded={expandedSections.configuration}
//               onClick={() => toggleSection('configuration')}
//             />
//           )}
//           {data.usage_steps && data.usage_steps.length > 0 && (
//             <DetailChip
//               label="How to Use"
//               badge="User"
//               badgeColor="bg-green-100 text-green-700"
//               expanded={expandedSections.usage}
//               onClick={() => toggleSection('usage')}
//             />
//           )}
//           {data.important_notes && data.important_notes.length > 0 && (
//             <DetailChip
//               label="Important Notes"
//               badge={data.important_notes.length}
//               badgeColor="bg-amber-100 text-amber-700"
//               expanded={expandedSections.notes}
//               onClick={() => toggleSection('notes')}
//             />
//           )}
//           {data.example_scenario && (
//             <DetailChip
//               label="Example"
//               icon="💡"
//               expanded={expandedSections.example}
//               onClick={() => toggleSection('example')}
//             />
//           )}
//           {data.related_topics && data.related_topics.length > 0 && (
//             <DetailChip
//               label="Related Topics"
//               badge={data.related_topics.length}
//               expanded={expandedSections.related}
//               onClick={() => toggleSection('related')}
//             />
//           )}
//         </div>
//       </div>

//       {/* Expandable Content Sections */}
//       <AnimatePresence>
//         {expandedSections.prerequisites && data.prerequisites && data.prerequisites.length > 0 && (
//           <ExpandableSection title="Prerequisites" icon="📋">
//             <ul className="space-y-2">
//               {data.prerequisites.map((prereq, idx) => (
//                 <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
//                   <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
//                   <span>{prereq}</span>
//                 </li>
//               ))}
//             </ul>
//           </ExpandableSection>
//         )}

//         {expandedSections.configuration && data.configuration_steps && data.configuration_steps.length > 0 && (
//           <ExpandableSection title="Configuration Steps (For Administrators)" icon="🔧">
//             <ol className="space-y-4">
//               {data.configuration_steps.map((step, idx) => (
//                 <li key={idx} className="flex items-start gap-3">
//                   <span className="font-bold text-gray-700 min-w-[2rem] text-sm">{idx + 1}.</span>
//                   <div className="flex-1">
//                     <p className="text-sm text-gray-800 leading-relaxed whitespace-pre-line">{step}</p>
//                   </div>
//                 </li>
//               ))}
//             </ol>
//           </ExpandableSection>
//         )}

//         {expandedSections.usage && data.usage_steps && data.usage_steps.length > 0 && (
//           <ExpandableSection title="How to Use (For End Users)" icon="📝">
//             <ol className="space-y-4">
//               {data.usage_steps.map((step, idx) => (
//                 <li key={idx} className="flex items-start gap-3">
//                   <span className="font-bold text-gray-700 min-w-[2rem] text-sm">{idx + 1}.</span>
//                   <div className="flex-1">
//                     <p className="text-sm text-gray-800 leading-relaxed whitespace-pre-line">{step}</p>
//                   </div>
//                 </li>
//               ))}
//             </ol>
//           </ExpandableSection>
//         )}

//         {expandedSections.notes && data.important_notes && data.important_notes.length > 0 && (
//           <ExpandableSection title="Important Notes" icon="⚠️">
//             <ul className="space-y-3">
//               {data.important_notes.map((note, idx) => {
//                 const isRestriction = note.toLowerCase().includes("cannot") || note.toLowerCase().includes("must not");
//                 const isRequirement = note.toLowerCase().includes("must") || note.toLowerCase().includes("required");
                
//                 return (
//                   <li key={idx} className="flex items-start gap-3">
//                     {isRestriction ? (
//                       <span className="text-red-600 font-bold text-lg">❌</span>
//                     ) : isRequirement ? (
//                       <span className="text-amber-600 font-bold text-lg">⚠️</span>
//                     ) : (
//                       <span className="text-blue-600 font-bold text-lg">ℹ️</span>
//                     )}
//                     <span className="text-sm text-gray-700 leading-relaxed flex-1">{note}</span>
//                   </li>
//                 );
//               })}
//             </ul>
//           </ExpandableSection>
//         )}

//         {expandedSections.example && data.example_scenario && (
//           <ExpandableSection title="Example Scenario" icon="💡">
//             <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
//               <p className="text-sm text-gray-800 leading-relaxed whitespace-pre-line">{data.example_scenario}</p>
//             </div>
//           </ExpandableSection>
//         )}

//         {expandedSections.related && data.related_topics && data.related_topics.length > 0 && (
//           <ExpandableSection title="Related Topics" icon="🔗">
//             <ul className="space-y-2">
//               {data.related_topics.map((topic, idx) => (
//                 <li key={idx} className="p-3 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
//                   <p className="text-sm text-gray-800">{topic}</p>
//                 </li>
//               ))}
//             </ul>
//           </ExpandableSection>
//         )}
//       </AnimatePresence>

//       {/* Clarifying Questions */}
//       {data.clarifying_questions && data.clarifying_questions.length > 0 && (
//         <div className="p-5 border-t bg-blue-50">
//           <div className="flex items-start gap-3">
//             <Info className="w-5 h-5 text-blue-600 mt-0.5" />
//             <div className="flex-1">
//               <h3 className="text-sm font-semibold text-gray-700 mb-2">Need clarification?</h3>
//               {data.detected_ambiguity && (
//                 <p className="text-xs text-gray-600 mb-3">{data.detected_ambiguity}</p>
//               )}
//               <div className="flex flex-wrap gap-2">
//                 {data.clarifying_questions.map((q, idx) => (
//                   <Button
//                     key={idx}
//                     variant="secondary"
//                     size="sm"
//                     onClick={() => onSend(q)}
//                     className="text-xs"
//                   >
//                     {q}
//                   </Button>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Footer: Confidence & Sources */}
//       <div className="p-4 bg-gray-50 border-t flex items-center justify-between text-xs">
//         <div className="flex items-center gap-4">
//           {data.confidence && (
//             <div className={`px-3 py-1 rounded-full border ${getConfidenceColor()} flex items-center gap-2`}>
//               <span className="font-mono text-xs">{getConfidenceDots()}</span>
//               <span className="font-medium capitalize">{data.confidence.level} Confidence</span>
//             </div>
//           )}
//           {data.sources && data.sources.length > 0 && (
//             <button
//               onClick={() => toggleSection('sources')}
//               className="text-gray-600 hover:text-gray-800 flex items-center gap-1"
//             >
//               📄 {data.sources.length} Source{data.sources.length > 1 ? 's' : ''}
//               {expandedSections.sources ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
//             </button>
//           )}
//         </div>
        
//         {data.confidence?.reason && (
//           <span className="text-gray-500 max-w-md truncate" title={data.confidence.reason}>
//             {data.confidence.reason}
//           </span>
//         )}
//       </div>

//       {/* Expandable Sources */}
//       <AnimatePresence>
//         {expandedSections.sources && data.sources && data.sources.length > 0 && (
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             className="border-t bg-gray-50 overflow-hidden"
//           >
//             <div className="p-4 space-y-2">
//               {data.sources.map((src, idx) => (
//                 <div key={idx} className="text-xs text-gray-600 p-2 bg-white rounded border">
//                   {src}
//                 </div>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// function DetailChip({ label, badge, badgeColor = "bg-blue-100 text-blue-700", icon, expanded, onClick }) {
//   return (
//     <button
//       onClick={onClick}
//       className={`px-3 py-1.5 rounded-full border text-xs font-medium transition-all flex items-center gap-2 ${
//         expanded
//           ? "bg-blue-600 text-white border-blue-600"
//           : "bg-white text-gray-700 border-gray-300 hover:border-gray-400"
//       }`}
//     >
//       {icon && <span>{icon}</span>}
//       <span>{label}</span>
//       {badge && (
//         <span className={`px-1.5 py-0.5 rounded text-xs font-semibold ${expanded ? "bg-blue-700 text-white" : badgeColor}`}>
//           {badge}
//         </span>
//       )}
//       {expanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
//     </button>
//   );
// }

// function ExpandableSection({ title, icon, children }) {
//   return (
//     <motion.div
//       initial={{ height: 0, opacity: 0 }}
//       animate={{ height: "auto", opacity: 1 }}
//       exit={{ height: 0, opacity: 0 }}
//       className="border-t overflow-hidden"
//     >
//       <div className="p-5">
//         <h4 className="text-sm font-semibold text-gray-700 mb-4 flex items-center gap-2">
//           {icon && <span>{icon}</span>}
//           {title}
//         </h4>
//         {children}
//       </div>
//     </motion.div>
//   );
// }

// function TypingIndicator() {
//   return (
//     <motion.div
//       className="mr-auto bg-gray-200 text-gray-700 px-4 py-2 rounded-2xl shadow-sm flex gap-1"
//       initial={{ opacity: 0.7 }}
//       animate={{ opacity: 1 }}
//     >
//       <span className="w-2 h-2 bg-gray-600 rounded-full animate-bounce [animation-delay:-0.3s]" />
//       <span className="w-2 h-2 bg-gray-600 rounded-full animate-bounce [animation-delay:-0.15s]" />
//       <span className="w-2 h-2 bg-gray-600 rounded-full animate-bounce" />
//     </motion.div>
//   );
// }

// ChatWindow.jsx
import { useState, useEffect, useRef } from "react";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Info,
  BookOpen,
  ArrowRight,
  Shield,
} from "lucide-react";

export default function ChatWindow({ messages, onSend, loading }) {
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);

  const sendMessage = () => {
    if (!input.trim()) return;
    onSend(input);
    setInput("");
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  return (
    <div className="flex flex-col h-full bg-white">
      <div className="flex-1 overflow-y-auto p-8 space-y-6">
        {messages.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`flex ${m.sender === "user" ? "justify-end" : "justify-start"} w-full`}
          >
            {m.sender === "user" ? (
              <div className="px-4 py-3 rounded-2xl shadow-sm text-sm leading-relaxed bg-black text-white max-w-2xl">
                {m.text}
              </div>
            ) : m.type === "structured_answer" ? (
              <div className="max-w-4xl w-full">
                <StructuredAnswer data={m.data} onSend={onSend} />
              </div>
            ) : (
              <div className="px-4 py-3 rounded-2xl shadow-sm text-sm leading-relaxed bg-gray-100 text-gray-900 max-w-3xl">
                {m.text}
              </div>
            )}
          </motion.div>
        ))}
        {loading && <TypingIndicator />}
        <div ref={bottomRef} />
      </div>

      <div className="border-t p-4 flex items-center gap-3 bg-white">
        <Input
          placeholder="Ask Ellie anything about Workday..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          className="flex-1"
        />
        <Button onClick={sendMessage} disabled={loading} className="px-6">
          Send
        </Button>
      </div>
    </div>
  );
}

function StructuredAnswer({ data, onSend }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
      {/* Clarification Note */}
      {data.clarification_note && (
        <div className="px-6 py-3 bg-blue-50 border-b border-blue-100 flex items-start gap-3">
          <Info className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
          <div className="flex-1">
            <p className="text-xs font-medium text-blue-900 mb-0.5">Note</p>
            <p className="text-sm text-blue-800 leading-relaxed">{data.clarification_note}</p>
          </div>
        </div>
      )}

      {/* Main Answer */}
      <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="flex items-start gap-4">
          <div className="p-2 bg-blue-500 rounded-lg shadow-sm flex-shrink-0">
            <Info className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <p className="text-base text-gray-800 leading-relaxed">{data.answer}</p>

            {data.for_admins && (
              <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 bg-purple-100 border border-purple-300 rounded-full text-xs text-purple-700 font-medium">
                <Shield className="w-3 h-3" />
                Admin Configuration Required
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Steps */}
      {data.main_steps && data.main_steps.length > 0 && (
        <div className="p-6 border-b">
          <div className="flex items-center gap-3 mb-4">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
            <h3 className="text-base font-semibold text-gray-800">How to Do This</h3>
          </div>
          <ol className="space-y-3">
            {data.main_steps.map((step, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-sm font-semibold">
                  {idx + 1}
                </span>
                <span className="text-sm text-gray-700 leading-relaxed flex-1 pt-0.5">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      )}

      {/* Need More Details */}
      {(data.prerequisites?.length > 0 || data.important_notes?.length > 0) && (
        <>
          <div className="px-6 py-4 bg-gray-50 border-b">
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="flex items-center justify-between w-full text-left group"
            >
              <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition">
                📚 Need More Details?
              </span>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500">
                  {!showDetails && (
                    <>
                      {data.prerequisites?.length > 0 && `${data.prerequisites.length} Prerequisites • `}
                      {data.important_notes?.length > 0 && `${data.important_notes.length} Important Notes • `}
                    </>
                  )}
                </span>
                {showDetails ? (
                  <ChevronUp className="w-4 h-4 text-gray-600" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-gray-600" />
                )}
              </div>
            </button>
          </div>

          <AnimatePresence>
            {showDetails && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden border-b"
              >
                <div className="p-6 space-y-6 bg-gray-50">
                  {/* Prerequisites */}
                  {data.prerequisites && data.prerequisites.length > 0 && (
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-1 h-5 bg-blue-500 rounded" />
                        <h4 className="text-sm font-semibold text-gray-800">Prerequisites</h4>
                      </div>
                      <ul className="space-y-2 ml-3">
                        {data.prerequisites.map((prereq, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                            <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span>{prereq}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Important Notes */}
                  {data.important_notes && data.important_notes.length > 0 && (
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-1 h-5 bg-amber-500 rounded" />
                        <h4 className="text-sm font-semibold text-gray-800">Important to Know</h4>
                      </div>
                      <ul className="space-y-3 ml-3">
                        {data.important_notes.map((note, idx) => {
                          const isRestriction =
                            note.toLowerCase().includes("cannot") || note.toLowerCase().includes("must not");
                          const isRequirement =
                            note.toLowerCase().includes("must") || note.toLowerCase().includes("required");

                          return (
                            <li key={idx} className="flex items-start gap-3">
                              {isRestriction ? (
                                <span className="flex-shrink-0 text-red-600 text-lg">❌</span>
                              ) : isRequirement ? (
                                <span className="flex-shrink-0 text-amber-600 text-lg">⚠️</span>
                              ) : (
                                <span className="flex-shrink-0 text-blue-600 text-lg">ℹ️</span>
                              )}
                              <span className="text-sm text-gray-700 leading-relaxed flex-1">{note}</span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}

      {/* Related Topics */}
      {data.related_topics && data.related_topics.length > 0 && (
        <div className="p-6 bg-gray-50">
          <div className="flex items-center gap-2 mb-3">
            <BookOpen className="w-4 h-4 text-gray-600" />
            <h4 className="text-sm font-semibold text-gray-700">Related Topics</h4>
          </div>
          <div className="space-y-2">
            {data.related_topics.map((topic, idx) => (
              <button
                key={idx}
                onClick={() => {
                  const topicName = topic.split(" - ")[0].trim();
                  onSend(topicName);
                }}
                className="w-full flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all text-left group"
              >
                <span className="text-sm text-gray-700 group-hover:text-blue-700">{topic}</span>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition" />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function TypingIndicator() {
  return (
    <motion.div
      className="flex justify-start"
      initial={{ opacity: 0.7 }}
      animate={{ opacity: 1 }}
    >
      <div className="bg-gray-200 text-gray-700 px-4 py-2 rounded-2xl shadow-sm flex gap-1">
        <span className="w-2 h-2 bg-gray-600 rounded-full animate-bounce [animation-delay:-0.3s]" />
        <span className="w-2 h-2 bg-gray-600 rounded-full animate-bounce [animation-delay:-0.15s]" />
        <span className="w-2 h-2 bg-gray-600 rounded-full animate-bounce" />
      </div>
    </motion.div>
  );
}