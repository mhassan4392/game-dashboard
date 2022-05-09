import { useState, useEffect } from "react";
import Spinner from "@/components/spinner/Spinner";
import { TabsItems, TabItem } from "@/components/tabs";
import banner from "@/assets/images/banner.jpg";
import EventsWidget from "@/components/pages/events/EventsWidget";
import MobileBanner from "@/components/banner/MobileBanner";
import { useOutletContext } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getGames, resetGames } from "@/store/features/game/gameSlice";

import VisibilitySensor from "react-visibility-sensor";

const Events = () => {
  const { tab } = useOutletContext();
  const { loading, country, games, page } = useSelector((state) => state.game);
  const dispatch = useDispatch();

  useEffect(() => {
    const run = async () => {
      await dispatch(resetGames());
    };
    run();
  }, [country, tab]);

  const [tabs] = useState([
    { id: 0, title: "today" },
    { id: 1, title: "early" },
    { id: 2, title: "minutes" },
    { id: 3, title: "jackpot" },
    { id: 4, title: "outright" },
    ,
  ]);

  return (
    <>
      <div className="lg:hidden">
        <MobileBanner />
      </div>
      <div>
        <img src={banner} className="h-16 w-full" alt="" />
      </div>
      <TabsItems className="flex-grow h-full scrollbar overflow-y-auto overflow-x-hidden">
        {loading && !games.length && (
          <div className={`flex items-center justify-center h-4/5`}>
            <Spinner />
          </div>
        )}
        {tabs.map((tab) => (
          <div key={tab.id}>
            <TabItem tab={tab.title} className="h-full">
              <>
                {games.map((game, i) => (
                  <div key={i}>
                    <EventsWidget game={game} />
                  </div>
                ))}
                <VisibilitySensor
                  onChange={async (isVisible) => {
                    if (isVisible) {
                      await dispatch(getGames());
                    }
                  }}
                >
                  <div className="scroller w-full h-2"></div>
                </VisibilitySensor>
                {loading && games.length > 0 && (
                  <div className={`flex items-center justify-center`}>
                    <Spinner />
                  </div>
                )}
              </>
            </TabItem>
          </div>
        ))}
      </TabsItems>
    </>
  );
};

export default Events;
