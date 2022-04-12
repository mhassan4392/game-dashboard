import MobileModel from "./MobileModal";
import { Tabs, TabsButtons, TabButton, TabsItems, TabItem } from "../../tabs";
import GameResultsStatus from "../../pages/gameresults/GameResultsStatus";
import { AiOutlineAppstore } from "react-icons/ai";
const GameResultsMenu = ({ open, onClose, gamesMenu }) => {
  return (
    <div>
      <Tabs>
        <MobileModel
          label="Game Results"
          onBackClick={onClose}
          open={open}
          header={() => (
            <>
              <TabsButtons className="flex items-center bg-dark-light justify-around mb-1">
                <TabButton
                  activeClass="tab-active"
                  className="px-3 py-4 mx-2 text-sm flex flex-col items-center"
                  tab="today"
                >
                  <span>Today</span>
                  <span>(33)</span>
                </TabButton>
                <TabButton
                  activeClass="tab-active"
                  className="px-3 py-4 mx-2 text-sm flex flex-col items-center"
                  tab="yesterday"
                >
                  <span>Yesterday</span>
                  <span>(22)</span>
                </TabButton>
                <TabButton
                  activeClass="tab-active"
                  className="px-3 py-4 mx-2 text-sm flex flex-col items-center"
                  tab="daybefore"
                >
                  <span>Day Before</span>
                  <span>(15)</span>
                </TabButton>
              </TabsButtons>
              <div className="absolute right-0.5 top-2.5 text-3xl text-secondary px-2 border-l border-secondary py-0 border-opacity-25">
                <AiOutlineAppstore onClick={() => gamesMenu(true)} />
              </div>
            </>
          )}
        >
          <TabsItems className="overflow-auto scrollbar">
            <TabItem defaultTab tab="today">
              {[...Array(20)].map((ar, i) => (
                <GameResultsStatus key={i} />
              ))}
              <GameResultsStatus />
            </TabItem>
            <TabItem tab="yesterday">Yesterday</TabItem>
            <TabItem tab="daybefore">Day Before</TabItem>
          </TabsItems>
        </MobileModel>
      </Tabs>
    </div>
  );
};

export default GameResultsMenu;
