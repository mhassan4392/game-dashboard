import { useState } from "react";
import { Outlet } from "react-router";
import { Tabs, TabsButtons, TabButton } from "@/components/tabs";
import { useSelector, useDispatch } from "react-redux";
import { setTab } from "@/store/features/game/gameSlice";
const EventLayout = () => {
  const dispatch = useDispatch();
  const { translations } = useSelector((state) => state.lan);
  const { tabs } = useSelector((state) => state.game);
  return (
    <div className="bg-black h-full">
      <Tabs
        defaultTab="today"
        className="h-full flex flex-col overflow-y-hidden w-screen sm:w-full"
      >
        {(tab) => (
          <>
            <TabsButtons className="flex items-end bg-dark-light px-4 mb-1 flex-nowrap scrollbar-x">
              {tabs.map((tab, i) => (
                <TabButton
                  tab={tab.title}
                  key={i}
                  activeClass="tab-active"
                  className="px-3 py-4 mx-2 text-sm flex flex-col items-center"
                  as="Link"
                  to="/events"
                  onClick={() => dispatch(setTab(tab.api))}
                >
                  <span>{translations.SecondMenu[tab.id]}</span>
                </TabButton>
              ))}
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

export default EventLayout;
