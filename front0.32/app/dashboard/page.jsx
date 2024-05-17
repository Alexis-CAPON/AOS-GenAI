import { currentUser } from "@/lib/auth";
import { getConversations } from "@/utils/get-conversations";
import { postNewConversation } from "@/utils/post-new-conversation";
import "server-only";
import BaseChat from "./_components/BaseChat";

export default async function Dashboard() {
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

  async function handleCreateConversation(input) {
    "use server";
    try {
      const response = await postNewConversation(user?.id, input);
      return response;
    } catch (error) {
      console.error("Error handling create conversation:", error);
    }
  }

  return (
    <div className="flex-auto">
      <BaseChat
        handleCreateConversation={handleCreateConversation}
        retrieveConversation={retrieveConversation}
      />
    </div>
  );
}
