import MobileModel from "@/components/layout/modals/MobileModal";
import { Tabs, TabsItems, TabItem } from "@/components/tabs";
import GameResultsWidget from "./GameResultsWidget";
import GameResultsModalHeader from "./GameResultsModalHeader";
const GameResultsModal = ({ open, onClose }) => {
  return (
    <div>
      <Tabs>
        <MobileModel
          label="Game Results"
          onBackClick={onClose}
          open={open}
          header={() => <GameResultsModalHeader />}
        >
          <TabsItems className="overflow-auto scrollbar">
            <TabItem defaultTab tab="today">
              {[...Array(20)].map((ar, i) => (
                <GameResultsWidget key={i} />
              ))}
            </TabItem>
            <TabItem tab="yesterday">Yesterday</TabItem>
            <TabItem tab="daybefore">Day Before</TabItem>
          </TabsItems>
        </MobileModel>
      </Tabs>
    </div>
  );
};

export default GameResultsModal;
