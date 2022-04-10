import { Outlet } from "react-router";

import { Tabs, TabsButtons, TabButton } from "../components/tabs";

const EventLayout = () => {
  return (
    <div className="bg-black h-full">
      <Tabs className="h-full flex flex-col">
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
            tab="inplay"
          >
            <span>InPlay</span>
            <span>(22)</span>
          </TabButton>
          <TabButton
            activeClass="tab-active"
            className="px-3 py-4 mx-2 text-sm flex flex-col items-center"
            tab="early"
          >
            <span>Early</span>
            <span>(25)</span>
          </TabButton>
          <TabButton
            activeClass="tab-active"
            className="px-3 py-4 mx-2 text-sm flex flex-col items-center"
            tab="combo"
          >
            <span>Combo</span>
            <span>(15)</span>
          </TabButton>
          <TabButton
            activeClass="tab-active"
            className="px-3 py-4 mx-2 text-sm flex flex-col items-center"
            tab="outright"
          >
            <span>Outright</span>
            <span>(11)</span>
          </TabButton>
        </TabsButtons>

        <Outlet />
      </Tabs>
    </div>
  );
};

export default EventLayout;
