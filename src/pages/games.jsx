import { useEffect, useRef, useState } from "react";
import Spinner from "@/components/spinner/Spinner";
import { TabsItems, TabItem } from "@/components/tabs";
import GamesWidget from "@/components/games/GamesWidget";
import MobileBanner from "@/components/banner/MobileBanner";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  getGames,
  resetGames,
  setDt,
  setDtTrigger,
  setTab,
} from "@/store/features/game/gameSlice";

import { format } from "date-fns";
import isVisible from "@/utils/isVisible";
import { AnimatePresence, motion } from "framer-motion";

const Games = () => {
  // scroll more games visible or not
  const visibleRef = useRef();

  // if component is mounted or not
  const isMounted = useRef(false);

  // data from store
  const { loading, country, games, tabs, tab, dt, dtTrigger } = useSelector(
    (state) => state.game
  );

  const dispatch = useDispatch();

  // location for changing
  const location = useLocation();

  // is scroll more games visible or not
  const [visible, setVisible] = useState(true);

  // run when date time changed
  useEffect(() => {
    const run = async () => {
      await dispatch(resetGames());
      await dispatch(getGames());
    };
    if (isMounted.current && dtTrigger) {
      run();
    }
  }, [dt]);

  // run when tab and location changed changed
  useEffect(() => {
    const run = async () => {
      await dispatch(setDtTrigger(false));
      let date = new Date();
      date.setDate(date.getDate() + 1);
      await dispatch(setDt(format(date, "yyyy-MM-dd")));
      await dispatch(resetGames());
      await dispatch(getGames());
    };
    if (isMounted.current) {
      run();
    }
  }, [tab, location]);

  // run when country changed
  useEffect(() => {
    const run = async () => {
      await dispatch(resetGames());
      await dispatch(getGames());
    };

    if (isMounted.current) {
      run();
    }
  }, [country]);

  // location change

  // run when scroll more games visible
  useEffect(() => {
    const run = async () => {
      await dispatch(getGames());
    };
    if (isMounted.current && visible) {
      run();
    }
  }, [visible]);

  // initial run
  useEffect(() => {
    const run = async () => {
      if (isMounted.current) {
        await dispatch(getGames());
      } else {
        await dispatch(setTab(tab));
        await dispatch(resetGames());
        await dispatch(getGames());
        isMounted.current = true;
      }
    };

    run();
  }, []);

  // wheel handler
  const wheelHandler = async (e) => {
    const isvisible = isVisible(visibleRef);
    if (isvisible && e.deltaY > 0 && !loading) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  // touch down handler on mobile screens
  const onTouchEnd = () => {
    const isvisible = isVisible(visibleRef);
    if (isvisible && !loading) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  return (
    <>
      {/* mobile banner */}
      <div className="lg:hidden">
        <MobileBanner />
      </div>
      {/* scroll content */}
      <div
        className="flex-grow h-full scrollbar overflow-hidden overflow-x-hidden overflow-y-auto"
        onWheel={wheelHandler}
        onTouchEnd={onTouchEnd}
      >
        {/* spinner when games are empty */}
        {loading && !games.length && (
          <div className={`flex items-center justify-center h-4/5`}>
            <Spinner />
          </div>
        )}
        <TabsItems className="">
          {tabs.map((tab) => (
            <AnimatePresence exitBeforeEnter>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                key={tab.id}
              >
                <TabItem tab={tab.api}>
                  <div>
                    {games.map((game, i) => (
                      <div key={i}>
                        <GamesWidget game={game} />
                      </div>
                    ))}
                  </div>
                </TabItem>
              </motion.div>
            </AnimatePresence>
          ))}
        </TabsItems>
        <div ref={visibleRef} className="s-screen w-full h-2"></div>
        {/* spinner */}
        {loading && games.length > 0 && (
          <div className={`flex items-center justify-center`}>
            <Spinner />
          </div>
        )}
      </div>
    </>
  );
};

export default Games;
