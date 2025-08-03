"use client"

import React from 'react'
import { FaRobot, FaTimes } from 'react-icons/fa'

interface ChatHeaderProps {
    setIsOpen: (open: boolean) => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ setIsOpen }) => {
    return (
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
    )
}

export default ChatHeader
