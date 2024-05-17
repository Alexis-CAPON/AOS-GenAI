import axios from "axios";
import "server-only";

export const getConversations = async (userId) => {
  try {
    const response = await axios.get(
      `http://localhost:5000/conversations/${userId}`
    );
    const answer = response.data.conversations;
    return answer;
  } catch (error) {
    console.error("Error retrieving users conversations");
    throw error;
  }
};

export const getConversationSpecific = async (userId, conversationId) => {
  try {
    const response = await axios.get(
      `http://localhost:5000/${userId}/${conversationId}`
    );
    const answer = response.data.conversation;
    return answer;
  } catch (error) {
    console.error("Error retrieving conversation");
    throw error;
  }
};
