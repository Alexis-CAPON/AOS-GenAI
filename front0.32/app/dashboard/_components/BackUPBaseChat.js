"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import * as React from "react";

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
import { useState } from "react";

const userId = "alexis.capon@cgi.com";

export default function CardsChat() {
  const [input, setInput] = React.useState("");
  const inputLength = input.trim().length;

  const user = useCurrentUser();

  const tab = "chat";
  const conversations = [];
  const selectedConversationId = -1;
  const [conversation, setConversation] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function matchConversationId(conv) {
    if (conv.conversation.conversationID === selectedConversationId) {
      return true;
    }
  }

  const handleSendMessage = () => {
    if (conversation == ![]) {
      setConversation((prevConversation) => [
        ...prevConversation,
        { content: newMessage, role: "user" },
      ]);
    }
    setIsLoading(true);
    if (selectedConversationId === -1) {
      setConversation([{ content: newMessage, role: "user" }]);
      createNewConversation(userId, newMessage, (answer) => {});
      // Set the new conversationn Id as the selectedConversation
    } else {
      getResponse(newMessage);
    }
    setNewMessage("");
  };

  React.useEffect(() => {
    const conv = conversations?.filter(matchConversationId);
    setConversation(conv[0]?.conversation.conversationContent);
  }, [selectedConversationId]);

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
            {selectedConversationId !== -1 ? (
              <div>
                <div>
                  <ScrollArea className="flex flex-grow h-full">
                    {" "}
                    {/* Apply overflow-y-auto for vertical scrolling */}
                    <div className="p-4 flex-grow">
                      {conversation?.map((message, index) => (
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
                <div>
                  {isLoading && (
                    <Label className="text-sm text-gray-500 text-right">
                      ChatCBC is answering...
                    </Label>
                  )}
                </div>
              </div>
            ) : (
              <Label className="text-sm text-gray-500">
                Start a new conversation...
              </Label>
            )}
          </CardContent>
          <CardFooter>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                if (inputLength === 0) return;
              }}
              className="flex w-full items-center space-x-2"
            >
              <Textarea
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message here."
                className="flex-grow" // Use flex-grow to fill available space
              />
              <Button onClick={handleSendMessage}>Send</Button>
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
              {selectedConversationId !== -1 ? (
                <div>
                  <div className="max-h-[450px] overflow-auto">
                    {" "}
                    {/* Set a maximum height for the container */}
                    <ScrollArea className="flex flex-col h-full">
                      {" "}
                      {/* Apply overflow-y-auto for vertical scrolling */}
                      <div className="p-4 flex-grow">
                        {conversation?.map((message, index) => (
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
                  <div>
                    {isLoading && (
                      <Label className="text-sm text-gray-500 text-right">
                        ChatCBC is answering...
                      </Label>
                    )}
                  </div>
                </div>
              ) : (
                <div>
                  <Label className="text-sm text-gray-500">
                    Start a new conversation...
                  </Label>
                </div>
              )}
            </CardContent>
            <CardFooter>
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  if (inputLength === 0) return;
                }}
                className="flex w-full items-center space-x-2"
              >
                <Textarea
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
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
