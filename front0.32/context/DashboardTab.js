"use client";
import { createContext, useState } from 'react';

export const DashboardTab = createContext();

export const TabProvider = ({ children }) => {
  const [tab, setTab] = useState('chat');

  // Other conversation-related functions...

  return (
    <DashboardTab.Provider value={{ tab, setTab }}>
      {children}
    </DashboardTab.Provider>
  );
};
