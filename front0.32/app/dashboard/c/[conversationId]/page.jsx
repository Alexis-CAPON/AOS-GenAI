// conversations/[conversation_id]/page.jsx
import { currentUser } from "@/lib/auth";
import {
  getConversations,
  getConversationSpecific,
} from "@/utils/get-conversations";
import { postResponse } from "@/utils/post-response";
import { notFound } from "next/navigation";
import "server-only";
import ConversationChat from "../../_components/ConversationChat";

export default async function ConversationPage({ params }) {
  // Pass the conversation_id to the CardsChat component or use it for data fetching
  const user = await currentUser();

  async function retrieveConversation() {
    "use server";
    try {
      const conversations = await getConversations(user?.id);
      return conversations;
    } catch (error) {
      console.error("Error retrieving conversation:", error);
    }
  }

  async function GetSpecificConversation(conversationId) {
    "use server";
    try {
      const conversation = await getConversationSpecific(
        user?.id,
        conversationId
      );
      return conversation;
    } catch (error) {
      notFound();
      console.error("Error retrieving conversation:", error);
    }
  }

  async function handlePostResponse(initialmessage, conversationid) {
    "use server";
    try {
      const response = await postResponse(
        user?.id,
        initialmessage,
        conversationid
      );

      return response;
    } catch (error) {
      console.error("Error creating new conversation!");
      throw error; // Re-throw the error to be handled by the caller if necessary
    }
  }

  return (
    <div className="w-full h-full">
      <ConversationChat
        conversationId={params.conversationId}
        GetSpecificConversation={GetSpecificConversation}
        retrieveConversation={retrieveConversation}
        handlePostResponse={handlePostResponse}
      />
    </div>
  );
}
