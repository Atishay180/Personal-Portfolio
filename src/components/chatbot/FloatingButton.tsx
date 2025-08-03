"use client"

import React from 'react'
import { BsChatDots } from 'react-icons/bs'

interface FloatingButtonProps {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({isOpen, setIsOpen}) => {
  return (
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
  )
}

export default FloatingButton
