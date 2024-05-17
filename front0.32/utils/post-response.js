import axios from "axios";
import "server-only";

export const postResponse = async (userid, initialmessage, conversationid) => {
  try {
    const response = await axios.post("http://localhost:5000/get-answer", {
      userId: userid,
      message: initialmessage,
      conversationID: conversationid,
    });

    const answer = response.data.answer;
    return answer;
  } catch (error) {
    console.error("Error answering the user message!");
    throw error; // Re-throw the error to be handled by the caller if necessary
  }
};
