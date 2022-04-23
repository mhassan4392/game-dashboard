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

    () => clearTimeout(timeout);
  }, [tab]);

  const items = [{ tab: "today" }, { tab: "yesterday" }, { tab: "daybefore" }];

  return (
    <TabsItems className="flex-grow flex flex-col overflow-auto scrollbar">
      {loading && (
        <div className="h-full flex items-center justify-center">
          <Spinner />
        </div>
      )}
      {items.map((item) => (
        <>
          {!loading && (
            <TabItem tab={item.tab} className="h-full">
              <div>
                {[...Array(20)].map((ar, i) => (
                  <GameResultsWidget key={i} />
                ))}
              </div>
            </TabItem>
          )}
        </>
      ))}
    </TabsItems>
  );
};

export default GameResults;
