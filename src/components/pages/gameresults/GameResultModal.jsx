import { useState } from "react";
import MobileModel from "@/components/layout/modals/MobileModal";
import { TabItem, Tabs, TabsItems } from "@/components/tabs";
import GameResultWidget from "./GameResultWidget";
import GameResultModalHeader from "./GameResultModalHeader";

const GameResultModal = ({ open, onClose }) => {
  const [tabs] = useState([
    { id: 0, title: "match" },
    { id: 1, title: "first" },
    { id: 2, title: "second" },
  ]);
  return (
    <div>
      <Tabs defaultTab="tab">
        <MobileModel
          onBackClick={onClose}
          open={open}
          modalBodyClass="overflow-hidden p-0 bg-[#2d799b] bg-opacity-25 md:bg-dark"
          modalHeaderClass="p-0"
          header={() => <GameResultModalHeader onXClick={onClose} />}
        >
          <TabsItems className="overflow-auto scrollbar flex-grow">
            {tabs.map((tab) => (
              <TabItem key={tab.id} defaultTab tab={tab.title} className="py-2">
                {[...Array(20)].map((ar, i) => (
                  <div key={i}>
                    <GameResultWidget />
                  </div>
                ))}
              </TabItem>
            ))}
          </TabsItems>
        </MobileModel>
      </Tabs>
    </div>
  );
};

export default GameResultModal;
