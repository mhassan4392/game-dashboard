import { Outlet } from "react-router";

import { Tabs, TabsButtons, TabButton } from "../components/tabs";

const EventLayout = () => {
  return (
    <div className="bg-black h-full">
      <Tabs className="h-full">
        <TabsButtons className="flex items-center bg-dark-light px-4 mb-1 scrollbar-x">
          <TabButton
            activeClass="tab-active"
            className="px-3 py-4 mx-2 text-sm items-center flex flex-col"
            tab="today"
          >
            <span>Today</span>
            <span>(33)</span>
          </TabButton>
          <TabButton
            activeClass="tab-active"
            className="px-3 py-4 mx-2 text-sm items-center flex flex-col"
            tab="inplay"
          >
            <span>InPlay</span>
            <span>(22)</span>
          </TabButton>
          <TabButton
            activeClass="tab-active"
            className="px-3 py-4 mx-2 text-sm items-center flex flex-col"
            tab="early"
          >
            <span>Early</span>
            <span>(25)</span>
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
