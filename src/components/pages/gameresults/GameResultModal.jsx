import MobileModel from "@/components/layout/modals/MobileModal";
import { TabItem, Tabs, TabsItems } from "@/components/tabs";
import GameResultWidget from "./GameResultWidget";
import GameResultModalHeader from "./GameResultModalHeader";

const GameResultModal = ({ open, onClose }) => {
  return (
    <div>
      <Tabs>
        <MobileModel
          onBackClick={onClose}
          open={open}
          modalBodyClass="overflow-hidden p-0 bg-[#2d799b] bg-opacity-25 md:bg-dark"
          modalHeaderClass="p-0"
          header={() => <GameResultModalHeader />}
        >
          <TabsItems className="overflow-auto scrollbar flex-grow">
            <TabItem defaultTab tab="match" className="py-2">
              {[...Array(20)].map((ar, i) => (
                <GameResultWidget />
              ))}
            </TabItem>
            <TabItem tab="firsthalf" className="bg-dark"></TabItem>
          </TabsItems>
        </MobileModel>
      </Tabs>
    </div>
  );
};

export default GameResultModal;
