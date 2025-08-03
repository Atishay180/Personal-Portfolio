"use client"

import React, { FormEvent } from 'react'
import { IoMdSend } from 'react-icons/io'

interface ChatInputProps {
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
    input: string;
    setInput: (input: string) => void;
    isLoading: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ handleSubmit, input, setInput, isLoading }) => {
    return (
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
    )
}

export default ChatInput
