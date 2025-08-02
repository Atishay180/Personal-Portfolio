"use client";

import { useEffect, useRef, useState } from "react";
import { FaTimes, FaRobot, FaUser } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import { BsChatDots } from "react-icons/bs";
import toast from "react-hot-toast";
import Cookies from "js-cookie";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi! I'm Atishay's AI assistant. Feel free to ask me anything about his background, skills, projects, or experience!",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom on message update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const getMessageCount = () => {
    const stored = Cookies.get("chat-usage");
    if (!stored) return { date: "", count: 0 };

    try {
      return JSON.parse(stored);
    } catch {
      return { date: "", count: 0 };
    }
  };

  const updateMessageCount = () => {
    const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD
    const { date, count } = getMessageCount();

    const newCount = date === today ? count + 1 : 1;
    Cookies.set("chat-usage", JSON.stringify({ date: today, count: newCount }), {
      expires: 1, // expires in 1 day
    });
  };

  const isLimitReached = () => {
    const today = new Date().toISOString().split("T")[0];
    const { date, count } = getMessageCount();
    return date === today && count >= 3;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    if (isLimitReached()) {
      toast.error("Daily limit reached. Try again tomorrow.");
      return;
    }

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);
    updateMessageCount();

    const res = await fetch("/api/chat-bot", {
      method: "POST",
      body: JSON.stringify({ messages: newMessages }),
    });

    if (!res.ok || !res.body) {
      toast.error("Failed to get a response from Atishay's AI assistant.");
      setIsLoading(false);
      return;
    }

    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let aiResponse = "";

    setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value);
      const lines = chunk.split("\n").filter((line) => line.trim().startsWith("data: "));

      for (const line of lines) {
        const jsonStr = line.replace("data: ", "").trim();
        if (jsonStr === "[DONE]") continue;

        try {
          const parsed = JSON.parse(jsonStr);
          if (parsed.type === "text-delta" && parsed.delta) {
            aiResponse += parsed.delta;

            setMessages((prev) => {
              const updated = [...prev];
              const lastMsg = updated[updated.length - 1];
              if (lastMsg.role === "assistant") {
                lastMsg.content = aiResponse;
                updated[updated.length - 1] = lastMsg;
              }
              return updated;
            });
          }
        } catch (err) {
          console.error("Stream parse error:", err);
          toast.error("AI response format error.");
        }
      }
    }

    setIsLoading(false);
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed fade-in bottom-4 right-4 z-50 flex items-center gap-2 sm:bottom-6 sm:right-6">
        {!isOpen && (
          <>

            {/* ------------------remove this whole button before hosting------------------  */}
            {/* <button
              onClick={() => {
                Cookies.remove("chat-usage");
                toast.success("Message limit reset!");
              }}
              className="mt-4 bg-red-600 text-white px-4 py-2 rounded"
            >
              Reset Chat Limit
            </button> */}
            {/* ------------------remove this whole button before hosting------------------  */}

            <span className="text-white bg-gray-800 px-3 py-2 rounded-lg shadow text-sm font-medium">
              AI Assistant
            </span>
            <button
              onClick={() => setIsOpen(true)}
              className="h-14 w-14 rounded-full bg-blue-500 hover:bg-blue-600 shadow-lg flex items-center justify-center text-white"
              aria-label="Open Chatbot"
            >
              <BsChatDots className="h-6 w-6" />
            </button>
          </>
        )}
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 z-50 w-[95%] max-w-md h-[80vh] sm:w-96 sm:h-[500px]">
          <div className="h-full bg-gray-900 border border-gray-700 shadow-2xl rounded-xl flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-gray-800 rounded-t-xl border-b border-gray-700">
              <h3 className="text-white text-lg font-semibold flex items-center gap-2">
                <FaRobot className="h-5 w-5 text-blue-400" />
                Ask about Atishay
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white hover:bg-gray-700 p-2 rounded-md"
                aria-label="Close Chatbot"
              >
                <FaTimes className="h-4 w-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.role === "assistant" && (
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                      <FaRobot className="h-4 w-4 text-white" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] p-3 rounded-lg text-sm ${msg.role === "assistant"
                      ? "bg-gray-800 text-gray-100"
                      : "bg-blue-500 text-white"
                      }`}
                  >
                    {msg.content}
                  </div>
                  {msg.role === "user" && (
                    <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center flex-shrink-0">
                      <FaUser className="h-4 w-4 text-white" />
                    </div>
                  )}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-700 rounded-b-xl">
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  placeholder="Ask about Atishay..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 bg-gray-800 border border-gray-600 text-white placeholder-gray-400 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`${isLoading ? "opacity-50 cursor-not-allowed" : ""
                    } bg-blue-500 text-white p-3 rounded-lg flex items-center justify-center`}
                  aria-label="Send message"
                >
                  <IoMdSend className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
