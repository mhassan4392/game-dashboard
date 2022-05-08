import { useState, useEffect } from "react";
import Spinner from "@/components/spinner/Spinner";
import { TabsItems, TabItem } from "@/components/tabs";
import banner from "@/assets/images/banner.jpg";
import EventsWidget from "@/components/pages/events/EventsWidget";
import MobileBanner from "@/components/banner/MobileBanner";
import { useOutletContext } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getGames } from "@/store/features/game/gameSlice";

const Events = () => {
  const { tab } = useOutletContext();
  const { loading, country, games } = useSelector((state) => state.game);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGames());
  }, [country]);

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
        {loading && (
          <div className="h-full flex items-center justify-center">
            <Spinner />
          </div>
        )}
        {tabs.map((tab) => (
          <div key={tab.id}>
            {!loading && (
              <TabItem tab={tab.title}>
                <>
                  {games.map((game, i) => (
                    <div key={i}>
                      <EventsWidget game={game} />
                    </div>
                  ))}
                </>
              </TabItem>
            )}
          </div>
        ))}
      </TabsItems>
    </>
  );
};

export default Events;
