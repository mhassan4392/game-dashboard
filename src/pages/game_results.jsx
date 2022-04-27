import { useState, useEffect } from "react";
import GameResultsWidget from "@/components/pages/gameresults/GameResultsWidget";
import Spinner from "@/components/Spinner/Spinner";
import { TabsItems, TabItem } from "@/components/tabs";
import { useOutletContext } from "react-router-dom";
const GameResults = () => {
  const { tab } = useOutletContext();
  // loading
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [tab]);

  const [tabs] = useState([
    { id: 0, title: "today" },
    { id: 1, title: "early" },
    { id: 2, title: "minutes" },
    { id: 3, title: "jackpot" },
    { id: 4, title: "outright" },
    ,
  ]);

  return (
    <TabsItems className="flex-grow flex flex-col overflow-auto scrollbar">
      {loading && (
        <div className="h-full flex items-center justify-center">
          <Spinner />
        </div>
      )}
      {tabs.map((tab) => (
        <div key={tab.id}>
          {!loading && (
            <TabItem tab={tab.title} className="h-full">
              <>
                {[...Array(20)].map((ar, i) => (
                  <div key={i}>
                    <GameResultsWidget />
                  </div>
                ))}
              </>
            </TabItem>
          )}
        </div>
      ))}
    </TabsItems>
  );
};

export default GameResults;
