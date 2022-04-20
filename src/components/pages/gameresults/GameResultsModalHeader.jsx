import { useState } from "react";
import { TabsButtons, TabButton } from "@/components/tabs";
import { AiOutlineAppstore } from "react-icons/ai";
import GamesMenu from "@/components/layout/modals/GamesModal";

const GameResultsModalHeader = () => {
  const [gamesModal, setGamesModal] = useState(false);
  return (
    <>
      <GamesMenu open={gamesModal} onClose={() => setGamesModal(false)} />
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
        <AiOutlineAppstore onClick={() => setGamesModal(true)} />
      </div>
    </>
  );
};

export default GameResultsModalHeader;
