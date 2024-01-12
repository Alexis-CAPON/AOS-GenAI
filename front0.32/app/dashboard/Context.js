"use client"
import { createContext, useContext, useState } from 'react';

const ConversationContext = createContext();

export function ConversationProvider({ children }) {
  const [selectedConversationId, setSelectedConversationId] = useState(null);
  const [localMode, setLocalMode] = useState(null);
  const [serverMode, setServerMode] = useState(null);

  return (
    <ConversationContext.Provider value={{ selectedConversationId, setSelectedConversationId, localMode, setLocalMode, serverMode, setServerMode }}>
      {children}
    </ConversationContext.Provider>
  );
}

export function useConversation() {
  return useContext(ConversationContext);
}
