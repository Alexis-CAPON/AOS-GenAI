"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import io from 'socket.io-client';
import { useRouter } from 'next/router';
import TypingAnimation from 'react-type-animation';
import { useConversation } from './Context';

function getAnswer(userId, initialMessage, conversation_id, callback) {
          axios.post('http://37.187.29.116:5000/get-answer', {
            userId: userId,
            message: initialMessage,
            conversationID: conversation_id,
          })
            .then(response => {
              const answer = response.data.answer;
              if (callback) {
                callback(answer);
              }
            })
            .catch(error => {
              console.error("Error sending new messages", error);
            });
        }


function ChatRoom({userId, conversation_id}) {
  const { selectedConversationId, setSelectedConversationId } = useConversation();
  const [conversation, setConversation] = useState({});
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (selectedConversationId!=-1) {
      // Function to fetch conversation from the backend
      const fetchConversation = async () => {
        // Fetch conversation from the backend using selectedConversationId
        // and update the state
        // setConversation(fetchedConversationData);
        try {
          // Use the userId passed to the component
          const response = await axios.get(`http://37.187.29.116:5000/${userId}/${selectedConversationId}`);
          setConversation(response.data.conversation); // Set the conversations in state
        } catch (err) {
          console.error(err);
        }
      };
    fetchConversation();
  };


}, [selectedConversationId, newMessage, conversation]);

  const handleSendMessage = () => {
    // Clear the input field
    setNewMessage('');
    setIsLoading(true);
    // Add the user message to the conversation
    // Send the user message to the backend and update conversation
    getAnswer(userId, newMessage, selectedConversationId, (response) => {

    });
    setIsLoading(false);
  };

  return (
    <div class="flex flex-col h-full">
    <div class="flex items-center justify-center py-4 border-b">
      <h2 class="text-2xl font-semibold">ChatCBC - V1.0</h2> {/* Add your title here */}
    </div>
  <div class="flex-grow flex-shrink overflow-y-auto p-4">
    {conversation.conversation?.conversationContent?.map((message, index) => (
      <p key={index} class={`message ${message.role === 'user' ? 'text-right':'text-left'}`}>
        <span class="font-bold">{message.role}:</span> {message.content}
      </p>
    ))}
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
        onClick={handleSendMessage}
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



export default ChatRoom;
