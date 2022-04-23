import { Outlet } from "react-router";
import { Tabs, TabsButtons, TabButton } from "@/components/tabs";

const GameResultLayout = () => {
  return (
    <div className="bg-black h-full">
      <Tabs defaultTab="today" className="h-full flex flex-col overflow-hidden">
        {(tab) => (
          <>
            <TabsButtons className="flex items-center bg-dark-light px-4 mb-1">
              <TabButton
                activeClass="tab-active"
                className="px-3 py-4 mx-2 text-sm flex flex-col items-center"
                tab="today"
                as="Link"
                to="/game-results"
              >
                <span>Today</span>
                <span>(33)</span>
              </TabButton>
              <TabButton
                activeClass="tab-active"
                className="px-3 py-4 mx-2 text-sm flex flex-col items-center"
                tab="yesterday"
                as="Link"
                to="/game-results"
              >
                <span>Yesterday</span>
                <span>(22)</span>
              </TabButton>
              <TabButton
                activeClass="tab-active"
                className="px-3 py-4 mx-2 text-sm flex flex-col items-center"
                tab="daybefore"
                as="Link"
                to="/game-results"
              >
                <span>Day Before</span>
                <span>(15)</span>
              </TabButton>
            </TabsButtons>
            <div className="h-full flex flex-col grow overflow-hidden">
              <Outlet context={{ tab }} />
            </div>
          </>
        )}
      </Tabs>
    </div>
  );
};

export default GameResultLayout;
