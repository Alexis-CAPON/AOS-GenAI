"use client"
import React, { useState, useEffect } from 'react';

const NewConversation = ({onCreatingConversation }) => {
  // Handle the creation of a new conversation

  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = (newMessage) => {
    // Clear the input field
    setNewMessage('');
    onCreatingConversation(newMessage);
  };



  return (
    <div class="flex flex-col h-full">
    <div class="flex items-center justify-center py-4 border-b">
      <h2 class="text-2xl font-semibold p-">ChatCBC - V1.0</h2> {/* Add your title here */}
    </div>

    <div class="flex-grow flex-shrink overflow-y-auto p-4">
      
    </div>

  <div class="border-t p-4">
    <div class="flex items-center justify-between">
      <textarea
        class="flex-grow bg-gray-100 p-2 rounded-lg resize-y focus:outline-none"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Type a message..."
        style={{ maxHeight: "calc(2/3 * 100vh)", minHeight: "calc(1/12 *100vh)"}} // Limit to 2/3 of screen height
      ></textarea>
      <button
        class="ml-4 px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 focus:outline-none"
        onClick={()=> handleSendMessage(newMessage)}
      >

        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />

        </svg>
      </button>
    </div>
  </div>
</div>

  );
};

export default NewConversation;
