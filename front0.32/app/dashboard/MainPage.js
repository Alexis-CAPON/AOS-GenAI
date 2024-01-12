"use client"
import ConversationPage from './ConversationPage';
import NewConversation from './NewConversation';
import { ConversationProvider } from './Context';
import Sidebar from './Sidebar';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import TypingAnimation from 'react-type-animation';
import { useConversation } from './Context';
import { useLogin2 } from './../Context2';

// TO DO : MAKE CONVERSATION AT HIGHER LEVEL ? AND MAKE CONVERSATION AT THE LEFT AUTOMATICLY
// TO DO : MAKE A BETTER UI

const userId = 'alexis.capon@cgi.com'

function createNewConversation(userId, initialMessage, callback) {
        axios.post('http://37.187.29.116:5000/create-conversation', { userId: userId, message: initialMessage })
             .then(response => {
                 const answer = response.data.answer;
                 if (callback) {
                   callback(answer);
                 }
             })
             .catch(error => {
                 console.error("Error creating new conversation:", error);
             });
    }



function MainPage() {

  const [selectedConversation, setSelectedConversation] = useState(null);
  const { selectedConversationId, setSelectedConversationId } = useConversation();


  const getCreatingConv = () => {
    setSelectedConversationId(-1);
  };

  const handleCreatingConv = (userMessage) => {

    createNewConversation(userId, userMessage, (response) => {
      setSelectedConversationId(response.conversation.conversationID)
    });
  };

  useEffect(() => {
    if (selectedConversationId === -1) {
      // If conversation_id is not defined, display the NewConversation component
      setSelectedConversation(null); // Clear selectedConversation when switching to NewConversation
    } else {
      setSelectedConversation(selectedConversationId);
    }
  }, [selectedConversationId]);


     // If conversation_id is not defined, display the NewConversation component
  return (
       <div className="flex flex-col md:flex-row flex-1 bg-white">
     <aside className="flex h-screen w-60 flex-col border-r border-gray-200 bg-white">
       <Sidebar userId={userId} onNewChat={getCreatingConv} />
     </aside>
     <div className="flex-grow"> {/* Use flex-grow to make this div fill the available space */}
     {selectedConversation === null ? (
        <NewConversation onCreatingConversation={handleCreatingConv} />
      ) : (
        <ConversationPage userId={userId} />
      )}
     </div>
   </div>
     );
   }


export default MainPage;
