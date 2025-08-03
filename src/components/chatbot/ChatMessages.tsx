"use client"

import React, { RefObject } from 'react'
import { FaRobot, FaUser } from 'react-icons/fa'

interface Message {
    role: string;
    content: string;
}

interface ChatMessagesProps {
    messages: Message[],
    messagesEndRef: RefObject<HTMLDivElement | null>
}

const ChatMessages: React.FC<ChatMessagesProps> = ({ messages, messagesEndRef }) => {
    return (
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
    )
}

export default ChatMessages
