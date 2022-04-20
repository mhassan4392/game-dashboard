import { useState, useEffect } from "react";
import GameResultsWidget from "@/components/pages/gameresults/GameResultsWidget";
import Spinner from "@/components/Spinner/Spinner";
import { TabsItems, TabItem } from "@/components/tabs";
const GameResults = () => {
  // loading
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    () => clearTimeout(timeout);
  }, []);

  return (
    <TabsItems className="flex-grow flex flex-col overflow-auto scrollbar">
      <TabItem defaultTab tab="today" className="h-full">
        {!loading && (
          <div>
            {[...Array(20)].map((ar, i) => (
              <GameResultsWidget key={i} />
            ))}
          </div>
        )}
        {loading && (
          <div className="h-full flex items-center justify-center">
            <Spinner />
          </div>
        )}
      </TabItem>
      <TabItem tab="yesterday">Yesterday</TabItem>
      <TabItem tab="daybefore">Day Before</TabItem>
    </TabsItems>
  );
};

export default GameResults;
