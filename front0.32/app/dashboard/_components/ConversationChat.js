"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { useCurrentUser } from "@/hooks/use-current-user";
import { cn } from "@/lib/utils";
import {
  assetsStore,
  conversationsStore,
  messagesStore,
} from "@/utils/store-state";
import { useEffect, useRef, useState } from "react";

export default function ConversationChat({
  conversationId,
  GetSpecificConversation,
  retrieveConversation,
  handlePostResponse,
}) {
  const [input, setInput] = useState("");

  const user = useCurrentUser();
  const updateConversations = conversationsStore(
    (state) => state.updateConversations
  );
  const messages = messagesStore((state) => state.messages);
  const updateMessages = messagesStore((state) => state.updateMessages);
  const tab = assetsStore((state) => state.selectedTab);

  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    if (input.trim().length === 0) return;
    // Add the user message to the messages array
    setIsLoading(true);
    setInput("");
    updateMessages([...messages, { content: input, role: "user" }]);
    // Pass the input to server with handleCreateConversation
    const answer = await handlePostResponse(input, conversationId);
    setIsLoading(false);
    updateMessages([...answer]);
  };

  const handleRetrieveConversation = async () => {
    const conversations = await retrieveConversation(user?.id);
    updateConversations(conversations);
  };

  const handleGetSpecificConversation = async (conversationId) => {
    const conversation = await GetSpecificConversation(conversationId);
    updateMessages(conversation.conversation.conversationContent);
  };

  const bottomOfMessagesRef = useRef();

  useEffect(() => {
    handleGetSpecificConversation(conversationId);
    handleRetrieveConversation();
  }, [conversationId]);

  useEffect(() => {
    bottomOfMessagesRef?.current?.scrollIntoView({ behaviour: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col h-full">
      {tab === "chat" ? (
        <Card className="flex flex-col h-full">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <div>
                <p className="text-sm font-medium leading-none">Assistant</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="flex-grow overflow-auto">
            <ScrollArea className="flex-grow flex-auto">
              <div className="p-4 space-y-4">
                {messages?.map((message, index) => (
                  <div
                    key={index}
                    className={cn(
                      "flex flex-col gap-2 rounded-lg px-3 py-2 text-sm break-words",
                      message.role === "user"
                        ? "w-max ml-auto bg-primary text-primary-foreground"
                        : "bg-muted"
                    )}
                    ref={bottomOfMessagesRef}
                  >
                    {message.content}
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
          <CardFooter className="flex flex-col w-full">
            <div className="w-full mb-1">
              {isLoading && (
                <Label className="text-sm text-gray-500">
                  ChatCBC is answering...
                </Label>
              )}
            </div>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                handleSendMessage();
              }}
              className="flex w-full items-center space-x-2"
            >
              <Textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message here."
                className="flex-grow"
              />
              <Button type="submit">Send</Button>
            </form>
          </CardFooter>
        </Card>
      ) : (
        <div className="grid h-full grid-cols-2">
          <Card className="flex flex-col h-full">
            <CardHeader className="flex flex-row items-center">
              <div className="flex items-center space-x-4">
                <div>
                  <p className="text-sm font-medium leading-none">Assistant</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-grow overflow-auto">
              <ScrollArea className="flex-grow">
                <div className="p-4 space-y-4">
                  {messages?.map((message, index) => (
                    <div
                      key={index}
                      className={cn(
                        "flex w-max max-w-full flex-col gap-2 rounded-lg px-3 py-2 text-sm break-words",
                        message.role === "user"
                          ? "ml-auto bg-primary text-primary-foreground"
                          : "bg-muted"
                      )}
                    >
                      {message.content}
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
            <CardFooter className="flex w-full items-center space-x-2">
              <Textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message here."
                className="flex-grow"
              />
              <Button onClick={handleSendMessage}>Send</Button>
            </CardFooter>
          </Card>

          <Card className="ml-1 flex flex-col h-full">
            <CardHeader className="flex flex-row items-center">
              <div className="flex items-center space-x-4">
                <div>
                  <p className="text-sm font-medium leading-none">
                    Powerpoint Preview
                  </p>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>
      )}
    </div>
  );
}
