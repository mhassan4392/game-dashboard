import { Outlet } from "react-router";
import { Tabs, TabsButtons, TabButton } from "@/components/tabs";
import { useSelector, useDispatch } from "react-redux";
import { setTab, setDt } from "@/store/features/game/gameSlice";
import { format } from "date-fns";
import { setDtTrigger } from "@/store/features/game/gameSlice";
import EventDateModal from "@/components/layout/event/EventDateModel";
import getDates from "@/utils/getDates";
const GameResultLayout = () => {
  const dispatch = useDispatch();
  const { translations } = useSelector((state) => state.lan);
  const { tabs, dt, tab } = useSelector((state) => state.game);

  const dates = getDates();

  return (
    <div className="bg-black h-full">
      <Tabs
        defaultTab="today"
        className="h-full flex flex-col overflow-hidden w-screen sm:w-full"
      >
        <>
          <TabsButtons className="flex items-end bg-dark-light px-4 mb-1 flex-nowrap scrollbar-x shrink-0">
            {tabs.map((tab, i) => (
              <TabButton
                tab={tab.title}
                key={i}
                activeClass="tab-active"
                className="px-3 py-4 mx-2 text-sm flex flex-col items-center"
                as="Link"
                to="/game-results"
                onClick={() => dispatch(setTab(tab.api))}
              >
                <span>{translations.SecondMenu[tab.id]}</span>
              </TabButton>
            ))}
          </TabsButtons>
          <div className="items-center bg-dark-light px-4 flex-nowrap scrollbar-x shrink-0 text-xs md:flex hidden w-full">
            {(tab == "getearlytrade" || tab == "getjackpot") &&
              dates.map((date, i) => (
                <div
                  onClick={async () => {
                    await dispatch(setDtTrigger(true));
                    await dispatch(setDt(date));
                  }}
                  className={`flex flex-col items-center justify-center py-2 space-y-1 flex-nowrap mx-2 cursor-pointer ${
                    dt == date ? "text-primary" : ""
                  }`}
                  key={i}
                >
                  <div className="w-max">{date}</div>
                  <div className="font-extralight">
                    {format(new Date(date), "EE")}
                  </div>
                </div>
              ))}
          </div>
          {(tab == "getearlytrade" || tab == "getjackpot") && (
            <div className="items-center justify-center py-2 bg-dark-light px-4 flex-nowrap scrollbar-x shrink-0 text-xs flex md:hidden w-full">
              <EventDateModal />
            </div>
          )}
          <div className="h-full flex flex-col grow overflow-hidden">
            <Outlet />
          </div>
        </>
      </Tabs>
    </div>
  );
};

export default GameResultLayout;
