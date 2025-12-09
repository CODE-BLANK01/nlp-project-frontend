// // // src/components/ChatWindow.jsx
// // import { useState, useEffect, useRef } from "react";
// // import { Button } from "./ui/Button";
// // import { Input } from "./ui/Input";
// // import { motion, AnimatePresence } from "framer-motion";
// // import {
// //   ChevronDown,
// //   ChevronUp,
// // } from "lucide-react";

// // export default function ChatWindow({ messages, onSend, loading }) {
// //   const [input, setInput] = useState("");
// //   const bottomRef = useRef(null);

// //   const sendMessage = () => {
// //     if (!input.trim()) return;
// //     onSend(input);
// //     setInput("");
// //   };

// //   useEffect(() => {
// //     bottomRef.current?.scrollIntoView({ behavior: "smooth" });
// //   }, [messages, loading]);

// //   return (
// //     <div className="flex flex-col h-full bg-white">
// //       <div className="flex-1 overflow-y-auto p-8 space-y-6">
// //         {messages.map((m, i) => (
// //           <motion.div
// //             key={i}
// //             initial={{ opacity: 0, y: 10 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.2 }}
// //             className={`flex ${
// //               m.sender === "user" ? "justify-end" : "justify-start"
// //             } w-full`}
// //           >
// //             {m.sender === "user" ? (
// //               <div className="px-4 py-3 rounded-2xl shadow-sm text-sm leading-relaxed bg-black text-white max-w-2xl">
// //                 {m.text}
// //               </div>
// //             ) : m.type === "streaming_answer" ? (
// //               <div className="px-4 py-3 rounded-2xl shadow-sm text-sm leading-relaxed bg-gray-100 text-gray-900 max-w-3xl border border-blue-200">
// //                 <div className="flex items-center gap-2 mb-1">
// //                   <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
// //                   <span className="text-xs text-gray-500">
// //                     Jarvis is answering…
// //                   </span>
// //                 </div>
// //                 <p className="whitespace-pre-wrap">{m.text}</p>
// //               </div>
// //             ) : m.type === "debug_context" ? (
// //               <div className="max-w-4xl w-full">
// //                 <ContextDebugPanel debug={m.debug} />
// //               </div>
// //             ) : (
// //               <div className="px-4 py-3 rounded-2xl shadow-sm text-sm leading-relaxed bg-gray-100 text-gray-900 max-w-3xl">
// //                 {m.text}
// //               </div>
// //             )}
// //           </motion.div>
// //         ))}

// //         {loading && <TypingIndicator />}
// //         <div ref={bottomRef} />
// //       </div>

// //       <div className="border-t p-4 flex items-center gap-3 bg-white">
// //         <Input
// //           placeholder="Ask Jarvis anything about Workday..."
// //           value={input}
// //           onChange={(e) => setInput(e.target.value)}
// //           onKeyDown={(e) => e.key === "Enter" && sendMessage()}
// //           className="flex-1"
// //         />
// //         <Button onClick={sendMessage} disabled={loading} className="px-6">
// //           Send
// //         </Button>
// //       </div>
// //     </div>
// //   );
// // }

// // function ContextDebugPanel({ debug }) {
// //   const [open, setOpen] = useState(true);
// //   const expanded = debug?.expanded || [];

// //   return (
// //     <div className="border border-dashed border-gray-300 rounded-2xl bg-gray-50">
// //       <button
// //         onClick={() => setOpen((v) => !v)}
// //         className="w-full flex items-center justify-between px-4 py-3 text-xs text-gray-700 bg-gray-100 border-b border-gray-200 rounded-t-2xl"
// //       >
// //         <span className="font-semibold">
// //           🧪 TA Debug – Retrieved Context Chunks ({expanded.length})
// //         </span>
// //         {open ? (
// //           <ChevronUp className="w-4 h-4" />
// //         ) : (
// //           <ChevronDown className="w-4 h-4" />
// //         )}
// //       </button>

// //       <AnimatePresence initial={false}>
// //         {open && (
// //           <motion.div
// //             initial={{ height: 0, opacity: 0 }}
// //             animate={{ height: "auto", opacity: 1 }}
// //             exit={{ height: 0, opacity: 0 }}
// //             className="overflow-hidden"
// //           >
// //             <div className="p-4 space-y-3 max-h-80 overflow-y-auto text-xs">
// //               {expanded.map((chunk, idx) => (
// //                 <div
// //                   key={chunk.id || idx}
// //                   className="bg-white border border-gray-200 rounded-lg p-3"
// //                 >
// //                   <div className="flex flex-wrap justify-between items-baseline mb-2 gap-2">
// //                     <span className="font-semibold text-gray-800">
// //                       Chunk {idx + 1}
// //                     </span>
// //                     <span className="text-[10px] text-gray-500">
// //                       Doc: {chunk.documentTitle || "Untitled"} • orderIndex:{" "}
// //                       {chunk.orderIndex}
// //                     </span>
// //                   </div>
// //                   <pre className="whitespace-pre-wrap text-[11px] text-gray-800">
// //                     {chunk.content}
// //                   </pre>
// //                 </div>
// //               ))}
// //             </div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </div>
// //   );
// // }

// // function TypingIndicator() {
// //   return (
// //     <motion.div
// //       className="flex justify-start"
// //       initial={{ opacity: 0.7 }}
// //       animate={{ opacity: 1 }}
// //     >
// //       <div className="bg-gray-200 text-gray-700 px-4 py-2 rounded-2xl shadow-sm flex gap-1">
// //         <span className="w-2 h-2 bg-gray-600 rounded-full animate-bounce [animation-delay:-0.3s]" />
// //         <span className="w-2 h-2 bg-gray-600 rounded-full animate-bounce [animation-delay:-0.15s]" />
// //         <span className="w-2 h-2 bg-gray-600 rounded-full animate-bounce" />
// //       </div>
// //     </motion.div>
// //   );
// // }

// // src/components/ChatWindow.jsx
// import { useState, useEffect, useRef, useCallback, memo } from "react";
// import { Button } from "./ui/Button";
// import { Input } from "./ui/Input";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronDown, ChevronUp, Copy, Check, FileText } from "lucide-react";

// // =============================================================================
// // Message Types (should match ChatApp.jsx)
// // =============================================================================
// const MessageType = {
//   TEXT: "text",
//   STREAMING: "streaming_answer",
//   DEBUG_CONTEXT: "debug_context",
//   ERROR: "error",
// };

// // =============================================================================
// // Animation Variants
// // =============================================================================
// const messageVariants = {
//   initial: { opacity: 0, y: 10 },
//   animate: { opacity: 1, y: 0 },
//   exit: { opacity: 0, y: -10 },
// };

// const expandVariants = {
//   initial: { height: 0, opacity: 0 },
//   animate: { height: "auto", opacity: 1 },
//   exit: { height: 0, opacity: 0 },
// };

// // =============================================================================
// // User Message Bubble
// // =============================================================================
// const UserMessage = memo(function UserMessage({ text }) {
//   return (
//     <div className="px-4 py-3 rounded-2xl shadow-sm text-sm leading-relaxed bg-black text-white max-w-2xl">
//       {text}
//     </div>
//   );
// });

// // =============================================================================
// // Assistant Message Bubble
// // =============================================================================
// const AssistantMessage = memo(function AssistantMessage({ text, isStreaming, isError }) {
//   const [copied, setCopied] = useState(false);

//   const handleCopy = useCallback(async () => {
//     try {
//       await navigator.clipboard.writeText(text);
//       setCopied(true);
//       setTimeout(() => setCopied(false), 2000);
//     } catch (err) {
//       console.error("Failed to copy:", err);
//     }
//   }, [text]);

//   const bgClass = isError
//     ? "bg-red-50 border-red-200 text-red-900"
//     : isStreaming
//     ? "bg-blue-50 border-blue-200 text-gray-900"
//     : "bg-gray-100 text-gray-900";

//   return (
//     <div className={`group relative px-4 py-3 rounded-2xl shadow-sm text-sm leading-relaxed max-w-3xl border ${bgClass}`}>
//       {isStreaming && (
//         <div className="flex items-center gap-2 mb-2">
//           <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
//           <span className="text-xs text-gray-500">Jarvis is answering…</span>
//         </div>
//       )}

//       <p className="whitespace-pre-wrap">{text}</p>

//       {!isStreaming && text && (
//         <button
//           onClick={handleCopy}
//           className="absolute top-2 right-2 p-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity bg-white/80 hover:bg-white shadow-sm"
//           title="Copy to clipboard"
//         >
//           {copied ? (
//             <Check className="w-3.5 h-3.5 text-green-600" />
//           ) : (
//             <Copy className="w-3.5 h-3.5 text-gray-500" />
//           )}
//         </button>
//       )}
//     </div>
//   );
// });

// // =============================================================================
// // Context Debug Panel
// // =============================================================================
// const ContextDebugPanel = memo(function ContextDebugPanel({ debug }) {
//   const [open, setOpen] = useState(false); // Collapsed by default
//   const expanded = debug?.expanded || [];
//   const sources = debug?.sources || [];

//   if (expanded.length === 0) {
//     return (
//       <div className="border border-dashed border-gray-300 rounded-2xl bg-gray-50 px-4 py-3">
//         <span className="text-xs text-gray-500">No context chunks retrieved</span>
//       </div>
//     );
//   }

//   return (
//     <div className="border border-dashed border-gray-300 rounded-2xl bg-gray-50 max-w-4xl">
//       <button
//         onClick={() => setOpen((v) => !v)}
//         className="w-full flex items-center justify-between px-4 py-3 text-xs text-gray-700 bg-gray-100 hover:bg-gray-150 transition-colors border-b border-gray-200 rounded-t-2xl"
//       >
//         <div className="flex items-center gap-2">
//           <FileText className="w-4 h-4 text-gray-500" />
//           <span className="font-semibold">
//             Retrieved Context ({expanded.length} chunks from {sources.length} docs)
//           </span>
//         </div>
//         {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
//       </button>

//       <AnimatePresence initial={false}>
//         {open && (
//           <motion.div
//             variants={expandVariants}
//             initial="initial"
//             animate="animate"
//             exit="exit"
//             className="overflow-hidden"
//           >
//             {/* Sources Summary */}
//             {sources.length > 0 && (
//               <div className="px-4 py-2 bg-blue-50 border-b border-gray-200">
//                 <span className="text-xs font-medium text-gray-700">Sources: </span>
//                 <span className="text-xs text-gray-600">
//                   {sources.map((s) => s.title || "Untitled").join(", ")}
//                 </span>
//               </div>
//             )}

//             {/* Chunks */}
//             <div className="p-4 space-y-3 max-h-80 overflow-y-auto">
//               {expanded.map((chunk, idx) => (
//                 <ChunkCard key={chunk.id || idx} chunk={chunk} index={idx} />
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// });

// // =============================================================================
// // Chunk Card
// // =============================================================================
// const ChunkCard = memo(function ChunkCard({ chunk, index }) {
//   const [expanded, setExpanded] = useState(false);
//   const content = chunk.content || "";
//   const isLong = content.length > 300;
//   const displayContent = isLong && !expanded ? content.slice(0, 300) + "…" : content;

//   return (
//     <div className="bg-white border border-gray-200 rounded-lg p-3 text-xs">
//       <div className="flex flex-wrap justify-between items-baseline mb-2 gap-2">
//         <span className="font-semibold text-gray-800">Chunk {index + 1}</span>
//         <span className="text-[10px] text-gray-500">
//           {chunk.documentTitle || "Untitled"} • idx: {chunk.orderIndex}
//         </span>
//       </div>

//       <pre className="whitespace-pre-wrap text-[11px] text-gray-800 font-mono">
//         {displayContent}
//       </pre>

//       {isLong && (
//         <button
//           onClick={() => setExpanded((v) => !v)}
//           className="mt-2 text-blue-600 hover:text-blue-800 text-[10px] font-medium"
//         >
//           {expanded ? "Show less" : "Show more"}
//         </button>
//       )}
//     </div>
//   );
// });

// // =============================================================================
// // Typing Indicator
// // =============================================================================
// const TypingIndicator = memo(function TypingIndicator() {
//   return (
//     <motion.div
//       className="flex justify-start"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//     >
//       <div className="bg-gray-200 text-gray-700 px-4 py-3 rounded-2xl shadow-sm flex items-center gap-1.5">
//         <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
//         <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
//         <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" />
//       </div>
//     </motion.div>
//   );
// });

// // =============================================================================
// // Message Row
// // =============================================================================
// const MessageRow = memo(function MessageRow({ message }) {
//   const isUser = message.sender === "user";

//   return (
//     <motion.div
//       variants={messageVariants}
//       initial="initial"
//       animate="animate"
//       exit="exit"
//       transition={{ duration: 0.2 }}
//       className={`flex ${isUser ? "justify-end" : "justify-start"} w-full`}
//     >
//       {isUser ? (
//         <UserMessage text={message.text} />
//       ) : message.type === MessageType.DEBUG_CONTEXT ? (
//         <ContextDebugPanel debug={message.debug} />
//       ) : (
//         <AssistantMessage
//           text={message.text}
//           isStreaming={message.type === MessageType.STREAMING}
//           isError={message.type === MessageType.ERROR}
//         />
//       )}
//     </motion.div>
//   );
// });

// // =============================================================================
// // Main ChatWindow Component
// // =============================================================================
// export default function ChatWindow({ messages, onSend, loading }) {
//   const [input, setInput] = useState("");
//   const bottomRef = useRef(null);
//   const inputRef = useRef(null);

//   // Auto-scroll to bottom
//   useEffect(() => {
//     bottomRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages, loading]);

//   // Focus input on mount
//   useEffect(() => {
//     inputRef.current?.focus();
//   }, []);

//   const handleSend = useCallback(() => {
//     const trimmed = input.trim();
//     if (!trimmed) return;

//     onSend(trimmed);
//     setInput("");
//   }, [input, onSend]);

//   const handleKeyDown = useCallback(
//     (e) => {
//       if (e.key === "Enter" && !e.shiftKey) {
//         e.preventDefault();
//         handleSend();
//       }
//     },
//     [handleSend]
//   );

//   return (
//     <div className="flex flex-col h-full bg-white">
//       {/* Messages Area */}
//       <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-4">
//         <AnimatePresence mode="popLayout">
//           {messages.map((m) => (
//             <MessageRow key={m.id} message={m} />
//           ))}
//         </AnimatePresence>

//         <AnimatePresence>
//           {loading && <TypingIndicator />}
//         </AnimatePresence>

//         <div ref={bottomRef} aria-hidden="true" />
//       </div>

//       {/* Input Area */}
//       <div className="border-t p-4 flex items-center gap-3 bg-white">
//         <Input
//           ref={inputRef}
//           placeholder="Ask Jarvis anything about Workday..."
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyDown={handleKeyDown}
//           disabled={loading}
//           className="flex-1"
//           aria-label="Message input"
//         />
//         <Button
//           onClick={handleSend}
//           disabled={loading || !input.trim()}
//           className="px-6"
//         >
//           {loading ? "Sending…" : "Send"}
//         </Button>
//       </div>
//     </div>
//   );
// }

// src/components/ChatWindow.jsx
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import {
  ChevronDown,
  ChevronUp,
  BookOpen,
  FileText,
  Info,
} from "lucide-react";

export default function ChatWindow({ messages, onSend, loading }) {
  const [input, setInput] = useState("");
  const [showChunksForId, setShowChunksForId] = useState(null);
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
        {messages.map((m) => (
          <motion.div
            key={m.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className={`flex ${
              m.sender === "user" ? "justify-end" : "justify-start"
            } w-full`}
          >
            {m.sender === "user" ? (
              <div className="px-4 py-3 rounded-2xl shadow-sm text-sm leading-relaxed bg-black text-white max-w-2xl">
                {m.text}
              </div>
            ) : (
              <div className="max-w-4xl w-full space-y-3">
                {/* Retrieved chunks panel for TAs */}
                {m.chunks && (
                  <ChunkPanel
                    messageId={m.id}
                    chunks={m.chunks}
                    expanded={showChunksForId === m.id}
                    onToggle={() =>
                      setShowChunksForId((prev) =>
                        prev === m.id ? null : m.id
                      )
                    }
                  />
                )}

                {/* Assistant answer bubble */}
                <div className="px-4 py-3 rounded-2xl shadow-sm text-sm leading-relaxed bg-gray-100 text-gray-900 whitespace-pre-wrap">
                  {m.text || (loading && "Jarvis is thinking…")}
                </div>

                {/* Confidence chip if present */}
                {m.confidence && (
                  <ConfidenceChip confidence={m.confidence} />
                )}
              </div>
            )}
          </motion.div>
        ))}

        {loading && <TypingIndicator />}
        <div ref={bottomRef} />
      </div>

      <div className="border-t p-4 flex items-center gap-3 bg-white">
        <Input
          placeholder="Ask Jarvis anything about Workday..."
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

// ----------------------
// Chunk Panel (for TAs)
// ----------------------
function ChunkPanel({ messageId, chunks, expanded, onToggle }) {
  const { hits = [], expanded: expandedChunks = [], sources = [], time } = chunks;

  const best = hits[0];
  const thresholdNote =
    best && typeof best.distance === "number"
      ? `Best distance: ${best.distance.toFixed(
          3
        )} (similarity ≈ ${(best.similarity ?? 1 - best.distance).toFixed(3)})`
      : "";

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-4 py-2 text-left text-xs font-medium text-gray-700 hover:bg-gray-50"
      >
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-gray-500" />
          <span>Retrieved documentation chunks (for TAs)</span>
          {time && (
            <span className="text-[10px] text-gray-400">
              • Retrieval time: {time}
            </span>
          )}
        </div>
        <div className="flex items-center gap-3">
          {best && (
            <span className="text-[10px] text-gray-500 hidden sm:inline">
              {thresholdNote}
            </span>
          )}
          {expanded ? (
            <ChevronUp className="w-4 h-4 text-gray-500" />
          ) : (
            <ChevronDown className="w-4 h-4 text-gray-500" />
          )}
        </div>
      </button>

      {expanded && (
        <div className="border-t border-gray-200 max-h-72 overflow-y-auto">
          {/* Top hits with score */}
          <div className="px-4 py-3 border-b border-gray-100 bg-gray-50">
            <p className="text-[11px] font-semibold text-gray-700 mb-1">
              Top hits (by vector search)
            </p>
            <div className="space-y-1">
              {hits.map((h) => (
                <div
                  key={h.id}
                  className="text-[11px] text-gray-700 flex justify-between gap-2"
                >
                  <span className="truncate max-w-[55%]">
                    {h.documentTitle || h.sourceUri || "Untitled document"}
                  </span>
                  <span className="text-gray-500">
                    dist={h.distance.toFixed(3)}, sim=
                    {(h.similarity ?? 1 - h.distance).toFixed(3)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Expanded chunks */}
          <div className="px-4 py-3 space-y-3">
            <p className="text-[11px] font-semibold text-gray-700 flex items-center gap-1">
              <FileText className="w-3 h-3 text-gray-500" />
              Full chunk text used as context
            </p>

            {expandedChunks.map((c) => (
              <div
                key={c.id}
                className="border border-gray-200 rounded-lg p-2 bg-white"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-medium text-gray-700 truncate max-w-[65%]">
                    {c.documentTitle || c.sourceUri || "Untitled document"}
                  </span>
                  <span className="text-[10px] text-gray-400">
                    orderIndex: {c.orderIndex}
                  </span>
                </div>
                <pre className="text-[11px] text-gray-800 whitespace-pre-wrap">
                  {c.content}
                </pre>
              </div>
            ))}

            {expandedChunks.length === 0 && (
              <p className="text-[11px] text-gray-500">
                No expanded chunks were returned for this answer.
              </p>
            )}

            {sources.length > 0 && (
              <div className="pt-2 border-t border-gray-100">
                <p className="text-[11px] font-semibold text-gray-700 mb-1">
                  Source documents
                </p>
                <ul className="space-y-1">
                  {sources.map((s) => (
                    <li key={s.documentId} className="text-[11px] text-gray-700">
                      • {s.title || s.sourceUri || s.documentId}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {best && (
              <div className="mt-2 flex items-start gap-1 text-[10px] text-gray-500">
                <Info className="w-3 h-3 mt-0.5" />
                <span>
                  Jarvis refuses to answer if the top distance is above the
                  configured threshold. These chunks are exactly what the model
                  saw when generating the answer.
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// ----------------------
// Confidence chip
// ----------------------
function ConfidenceChip({ confidence }) {
  const level = (confidence.level || "").toLowerCase();
  let classes = "border-gray-300 text-gray-700 bg-gray-50";

  if (level === "high") {
    classes = "border-green-300 text-green-700 bg-green-50";
  } else if (level === "medium") {
    classes = "border-amber-300 text-amber-700 bg-amber-50";
  } else if (level === "low") {
    classes = "border-red-300 text-red-700 bg-red-50";
  }

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[11px] ${classes}`}
    >
      <span className="font-semibold capitalize">
        {confidence.level || "unknown"} confidence
      </span>
      {confidence.reason && (
        <span className="text-[10px] text-gray-500 truncate max-w-xs">
          {confidence.reason}
        </span>
      )}
    </div>
  );
}

// ----------------------
// Typing Indicator
// ----------------------
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