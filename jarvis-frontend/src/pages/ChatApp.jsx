// src/pages/ChatApp.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import Sidebar from "../components/Sidebar";
import ChatWindow from "../components/ChatWindow";

export default function ChatApp() {
  const [messages, setMessages] = useState([
    { id: 0, sender: "jarvis", text: "Welcome back 👋 How can I help today?" },
  ]);
  const [loading, setLoading] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL;
  const TENANT = import.meta.env.VITE_TENANT;

  const sendMessage = async (text) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    const userMsg = {
      id: Date.now(),
      sender: "user",
      text: trimmed,
    };

    // Pre-create assistant message which we'll stream into
    const assistantId = Date.now() + 1;
    const assistantMsg = {
      id: assistantId,
      sender: "jarvis",
      text: "", // streamed answer
      chunks: null, // retrieved chunks
      confidence: null,
    };

    setMessages((prev) => [...prev, userMsg, assistantMsg]);
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/ask`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token") || ""}`,
          "X-Tenant": TENANT,
        },
        credentials: "include",
        body: JSON.stringify({ question: trimmed }),
      });

      if (!res.ok || !res.body) {
        throw new Error(`HTTP ${res.status}`);
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder("utf-8");
      let buffer = "";

      const updateAssistant = (updater) => {
        setMessages((prev) =>
          prev.map((m) => (m.id === assistantId ? { ...m, ...updater(m) } : m))
        );
      };

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });

        // SSE messages are separated by \n\n
        let boundary = buffer.indexOf("\n\n");
        while (boundary !== -1) {
          const rawEvent = buffer.slice(0, boundary);
          buffer = buffer.slice(boundary + 2);

          const lines = rawEvent.split("\n").filter(Boolean);
          let eventName = "message";
          let dataLine = "";

          for (const line of lines) {
            if (line.startsWith("event:")) {
              eventName = line.slice("event:".length).trim();
            } else if (line.startsWith("data:")) {
              dataLine += line.slice("data:".length).trim();
            }
          }

          if (dataLine) {
            try {
              const payload = JSON.parse(dataLine);

              // Handle events
              if (eventName === "chunks") {
                // Attach chunks + retrieval metadata to the assistant message
                updateAssistant((prev) => ({
                  ...prev,
                  chunks: {
                    hits: payload.hits || [],
                    expanded: payload.expanded || [],
                    sources: payload.sources || [],
                    time: payload.time || "",
                  },
                }));
              } else if (eventName === "answer_delta") {
                const chunk = payload.chunk || "";
                if (chunk) {
                  updateAssistant((prev) => ({
                    ...prev,
                    text: (prev.text || "") + (prev.text ? " " : "") + chunk,
                  }));
                }
              } else if (eventName === "answer") {
                if (payload.answer) {
                  updateAssistant((prev) => ({
                    ...prev,
                    text:
                      (prev.text || "").trim().length > 0
                        ? `${prev.text.trim()}\n\n${payload.answer}`
                        : payload.answer,
                    confidence: payload.confidence || prev.confidence,
                  }));
                } else if (payload.confidence) {
                  updateAssistant((prev) => ({
                    ...prev,
                    confidence: payload.confidence,
                  }));
                }
              } else if (eventName === "error") {
                const msg =
                  payload.error === "question_required"
                    ? "Please enter a question."
                    : "Something went wrong while processing your question.";
                updateAssistant(() => ({
                  text: `⚠️ ${msg}`,
                  chunks: null,
                  confidence: null,
                }));
              }
            } catch (err) {
              console.error("[ChatApp] Failed to parse SSE data:", err);
            }
          }

          boundary = buffer.indexOf("\n\n");
        }
      }
    } catch (err) {
      console.error("[ChatApp] Streaming error:", err);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 2,
          sender: "jarvis",
          text: "❌ Network or server error. Please try again.",
        },
      ]);
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
          <h2 className="text-lg font-semibold">Jarvis – Your Workday Assistant</h2>
          <span className="text-xs text-gray-500">Tenant: {TENANT}</span>
        </motion.div>

        <div className="flex-1 min-h-0">
          <ChatWindow
            messages={messages}
            onSend={sendMessage}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
}