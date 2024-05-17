import { create } from "zustand";

export const conversationsStore = create((set) => ({
  conversations: [],
  updateConversations: (newConversations) =>
    set({ conversations: newConversations }),
  removeAllConversations: () => set({ conversations: [] }),
}));

export const messagesStore = create((set) => ({
  messages: [],
  updateMessages: (newMessages) => set({ messages: newMessages }),
  removeAllMessages: () => set({ messages: [] }),
}));

export const assetsStore = create((set) => ({
  selectedTab: "chat",
  updateSelectedTab: (tab) => set({ selectedTab: tab }),
}));
