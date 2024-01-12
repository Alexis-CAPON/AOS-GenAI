"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useConversation } from './Context';
import './conversation.css'; // Import the CSS file
import { HiAnnotation } from "react-icons/hi";

import Link from 'next/link';



const Conversations = ({ userId, onNewChat }) => {

  const { selectedConversationId, setSelectedConversationId } = useConversation();
  const [conversations, setConversations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');


  useEffect(() => {
    // Define the async function to fetch conversations
    const fetchConversations = async () => {
      try {
        // Use the userId passed to the component
        const response = await axios.get(`http://37.187.29.116:5000/conversations/${userId}`);
        setConversations(response.data.conversations); // Set the conversations in state
      } catch (err) {
        console.error(err);
      }
    };

    // Call the fetch function
    fetchConversations();
  }, [userId, selectedConversationId]); // Only re-run the effect if userId changes


  const handleConversationClick = (conversationId) => {
    // Pass the selected conversation ID to the parent component
    setSelectedConversationId(conversationId);
    console.log(conversationId)
  };

  const handleNewChat = () => {
    onNewChat();
  }


  return (
    <div>
  <div class="flex flex-col items-center gap-y-2 mt-5" >
    <button onClick={handleNewChat} className="group relative px-16 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none">
      New chat
    </button>
    <h2 class="text-xl font-semibold mb-5">Conversations</h2>
  </div>
  <ul role="list" class="divide-y divide-gray-200 overflow-y-auto max-h-80">
    {conversations.map((conversation) => (
      <li key={conversation.conversation.conversationID} class="py-4 active:bg-blue-600">
        <button onClick={() => handleConversationClick(conversation.conversation.conversationID)} className="flex items-center space-x-4 cursor-pointer">
          <div class="w-12 h-12 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
            </svg>
          </div>
          <div class="flex flex-col items-left">
            <p class="text-lg font-semibold text-gray-900">{conversation.conversation.conversationContent[0].content}</p>
            <p class="text-sm text-gray-500">{new Date(conversation.last_modified * 1000).toLocaleDateString()}</p>
          </div>
        </button>
      </li>
    ))}
  </ul>
</div>

  );
};

export default Conversations;
