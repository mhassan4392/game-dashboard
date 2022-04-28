import { useState } from "react";
import MobileModel from "@/components/layout/modals/MobileModal";
import { Tabs, TabsItems, TabItem } from "@/components/tabs";
import GameResultsWidget from "./GameResultsWidget";
import GameResultsModalHeader from "./GameResultsModalHeader";

const GameResultsModal = ({ open, onClose }) => {
  const [tabs] = useState([
    { id: 0, title: "today" },
    { id: 1, title: "early" },
    { id: 2, title: "minutes" },
    { id: 3, title: "jackpot" },
    { id: 4, title: "outright" },
    ,
  ]);
  return (
    <div>
      <Tabs defaultTab="today">
        <MobileModel
          label="Game Results"
          onBackClick={onClose}
          modalBodyClass="p-0"
          modalHeaderClass="p-0"
          open={open}
          header={() => <GameResultsModalHeader />}
        >
          <TabsItems className="overflow-auto scrollbar">
            {tabs.map((tab) => (
              <TabItem tab={tab.title} key={tab.id}>
                {[...Array(20)].map((ar, i) => (
                  <div key={i}>
                    <GameResultsWidget />
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

export default GameResultsModal;
