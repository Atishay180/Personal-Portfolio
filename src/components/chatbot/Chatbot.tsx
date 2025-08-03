"use client";

import { useEffect, useRef, useState } from "react";

import toast from "react-hot-toast"; 

import { updateMessageCount, isLimitReached } from "@/utils/cookieUtils"

import FloatingButton from "./FloatingButton";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";

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


  // Chat Submit Handler Function 
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
        <FloatingButton isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 z-50 w-[95%] max-w-md h-[80vh] sm:w-96 sm:h-[500px]">
          <div className="h-full bg-gray-900 border border-gray-700 shadow-2xl rounded-xl flex flex-col">

            {/* Header */}
            <ChatHeader
              setIsOpen={setIsOpen}
            />

            {/* Messages */}
            <ChatMessages
              messages={messages}
              messagesEndRef={messagesEndRef}
            />

            {/* Input */}
            <ChatInput
              handleSubmit={handleSubmit}
              input={input}
              setInput={setInput}
              isLoading={isLoading}
            />

          </div>
        </div>
      )}
    </>
  );
}
