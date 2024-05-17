"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { conversationsStore } from "@/utils/store-state";
import { useRouter } from "next/navigation";

export default function CardsConversation() {
  const conversations = conversationsStore((state) => state.conversations);
  const router = useRouter();

  const handleConversationClick = (conversationId) => {
    router.push(`/dashboard/c/${conversationId}`);
  };

  return (
    <div>
      <h4 className="mt-2 font-medium leading-none">Conversations</h4>
      <ScrollArea className="flex overflow-auto max-h-[525px]">
        <div className="p-4">
          {conversations.map((conversation) => (
            <div key={conversation.conversation.conversationID}>
              <div
                key={conversation.conversation.conversationID}
                className="flex flex-auto text-sm"
                onClick={() =>
                  handleConversationClick(
                    conversation.conversation.conversationID
                  )
                }
              >
                {conversation.conversation.conversationContent[0].content} -{" "}
                {new Date(
                  conversation.last_modified * 1000
                ).toLocaleDateString()}
              </div>
              <Separator className="my-2" />
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
