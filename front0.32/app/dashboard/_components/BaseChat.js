"use client";
import { ScrollArea } from "@/components/ui/scroll-area";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useCurrentUser } from "@/hooks/use-current-user";
import { cn } from "@/lib/utils";
import {
  assetsStore,
  conversationsStore,
  messagesStore,
} from "@/utils/store-state";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function BaseChat({
  handleCreateConversation,
  retrieveConversation,
}) {
  const [input, setInput] = useState("");
  const router = useRouter();

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
    const newConversation = await handleCreateConversation(input);
    router.push(`/dashboard/c/${newConversation.conversation.conversationID}`);
  };

  const handleRetrieveConversation = async () => {
    const conversations = await retrieveConversation(user?.id);
    updateConversations(conversations);
  };

  useEffect(() => {
    handleRetrieveConversation();
  }, []);

  return (
    <div className="flex flex-col h-full">
      {tab === "chat" ? (
        <Card className="flex flex-col h-full">
          <CardHeader className="">
            <div className="flex items-center space-x-4">
              <div>
                <p className="text-sm font-medium leading-none">Assistant</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="flex-grow overflow-auto">
            {!isLoading && (
              <Label className="text-sm text-gray-500">
                Start a new conversation...
              </Label>
            )}
            <div>
              <div>
                {/* Set a maximum height for the container */}
                <ScrollArea className="flex-auto ">
                  {/* Apply overflow-y-auto for vertical scrolling */}
                  <div className="p-4 flex-grow ">
                    {messages?.map((message, index) => (
                      <div
                        key={index}
                        className={cn(
                          "flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm",
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
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col w-full ">
            <div className=" w-full mb-1">
              {isLoading && (
                <Label className="text-sm text-gray-500">
                  ChatCBC is answering...
                </Label>
              )}
            </div>
            <div className="w-full ">
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                }}
                className="flex w-full items-center space-x-2"
              >
                <Textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message here."
                  className="flex-grow" // Use flex-grow to fill available space
                />
                <Button onClick={handleSendMessage}>Send</Button>
              </form>
            </div>
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
              {!isLoading && (
                <Label className="text-sm text-gray-500">
                  Start a new conversation...
                </Label>
              )}
              <div>
                <div>
                  {/* Set a maximum height for the container */}
                  <ScrollArea className="flex-auto ">
                    {/* Apply overflow-y-auto for vertical scrolling */}
                    <div className="p-4 flex-grow ">
                      {messages?.map((message, index) => (
                        <div
                          key={index}
                          className={cn(
                            "flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm",
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
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                }}
                className="flex w-full items-center space-x-2"
              >
                <Textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message here."
                  className="flex-grow" // Use flex-grow to fill available space
                />
                <Button onClick={handleSendMessage}>Send</Button>
              </form>
            </CardFooter>
          </Card>

          <Card className="ml-1">
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
