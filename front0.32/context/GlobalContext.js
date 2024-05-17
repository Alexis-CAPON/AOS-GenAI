"use client";
import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [selectedConversationId, setSelectedConversationId] = useState(-1);

  // Other conversation-related functions...

  return (
    <GlobalContext.Provider
      value={{ selectedConversationId, setSelectedConversationId }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
