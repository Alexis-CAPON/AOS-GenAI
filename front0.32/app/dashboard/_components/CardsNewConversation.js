"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { assetsStore, messagesStore } from "@/utils/store-state";
import { useRouter } from "next/navigation";

const CardsNewConversation = () => {
  const tab = assetsStore((state) => state.selectedTab);
  const updateSelectedTab = assetsStore((state) => state.updateSelectedTab);
  const removeAllMessages = messagesStore((state) => state.removeAllMessages);
  const router = useRouter();

  const handleTabChange = (tab) => {
    updateSelectedTab(tab);
  };

  const handleCreatingConv = () => {
    removeAllMessages();
    router.push("/dashboard");
  };

  return (
    // JSX markup for the component goes here
    <div className="flex flex-col">
      <Button
        onClick={() => handleCreatingConv()}
        className="mb-3"
        variant="secondary"
      >
        New discussion
      </Button>

      <Tabs defaultValue="chat" className="">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger onClick={() => handleTabChange("chat")} value="chat">
            Chat
          </TabsTrigger>
          <TabsTrigger
            onClick={() => handleTabChange("powerpoint")}
            value="powerpoint"
          >
            Powerpoint
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default CardsNewConversation;
