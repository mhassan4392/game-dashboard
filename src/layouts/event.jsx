import { Outlet } from "react-router";

import { Tabs, TabsButtons, TabButton } from "../components/tabs";

const EventLayout = () => {
  return (
    <div className="bg-black h-full">
      <Tabs className="h-full">
        <TabsButtons className="flex items-center bg-dark-light px-4 mb-1">
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
        <div className="h-full flex flex-col">
          <Outlet />
        </div>
      </Tabs>
    </div>
  );
};

export default EventLayout;
