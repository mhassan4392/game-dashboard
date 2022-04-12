import MobileModel from "./MobileModal";
import { Tabs, TabsButtons, TabButton, TabsItems, TabItem } from "../../tabs";
// import GameResultsStatus from "../../pages/gameresults/GameResultsStatus";
// import { AiOutlineAppstore } from "react-icons/ai";

import EmptyBet from "../../EmptyBet";

const BetHistoryMenu = ({ open, onClose }) => {
  return (
    // <div>
    <Tabs className="h-full flex flex-col">
      <MobileModel
        label="Game Results"
        onBackClick={onClose}
        open={open}
        modalBodyClass="p-0"
        modalHeaderClass="p-0"
        header={() => (
          <>
            <TabsButtons className="flex items-center justify-center space-x-3 py-4 bg-dark">
              <TabButton
                activeClass="bg-gradient-to-r from-primary to-secondary text-white"
                className="px-8 py-2 text-sm rounded-full border border-primary border-opacity-25 bg-dark-light"
                tab="history"
              >
                ESPORTS
              </TabButton>
              <TabButton
                activeClass="bg-gradient-to-r from-primary to-secondary text-white"
                className="px-8 py-2 text-sm rounded-full border border-primary border-opacity-25 bg-dark-light"
                tab="lootbox"
              >
                LOOTBOX
              </TabButton>
            </TabsButtons>
          </>
        )}
      >
        <TabsItems className="flex-grow h-full flex flex-col">
          <TabItem tab="lootbox" className="h-full flex flex-col bg-dark-light">
            <div className="flex items-center justify-between text-sm py-4 px-4">
              <div>Date</div>
              <div>Game Lobby</div>
              <div>bet</div>
              <div>Results</div>
              <div>Win/Lose</div>
            </div>
            <div className="flex-grow">
              <EmptyBet />
            </div>
          </TabItem>
          <TabItem defaultTab tab="history" className="flex-grow flex flex-col">
            <Tabs className="flex flex-col flex-grow">
              <TabsButtons className="flex items-center bg-dark-light mb-2">
                <TabButton
                  activeClass="tab-active"
                  className="basis-1/2 px-2 py-4 text-sm text-center"
                  tab="pending"
                >
                  Pending
                </TabButton>
                <TabButton
                  activeClass="tab-active"
                  className="basis-1/2 px-2 py-4 text-sm text-center"
                  tab="settled"
                >
                  Settled
                </TabButton>
              </TabsButtons>
              <TabsItems className="flex-grow">
                <TabItem tab="pending" className="h-full" defaultTab>
                  <EmptyBet />
                </TabItem>
                <TabItem tab="settled" className="h-full">
                  <EmptyBet />
                </TabItem>
              </TabsItems>
            </Tabs>
          </TabItem>
        </TabsItems>
      </MobileModel>
    </Tabs>
    // </div>
  );
};

export default BetHistoryMenu;
