import axios from "axios";
import "server-only";

export const postNewConversation = async (userid, initialmessage) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/create-conversation",
      {
        userId: userid,
        message: initialmessage,
      }
    );
    const answer = response.data.answer;
    return answer;
  } catch (error) {
    console.error("Error creating new conversation!");
    throw error; // Re-throw the error to be handled by the caller if necessary
  }
};
