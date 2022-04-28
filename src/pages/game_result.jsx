import { useState, useEffect, useContext } from "react";
import Spinner from "@/components/Spinner/Spinner";
import {
  TabButton,
  TabItem,
  Tabs,
  TabsButtons,
  TabsItems,
} from "@/components/tabs";
import GameResultWidget from "@/components/pages/gameresults/GameResultWidget";
import GameResultHeader from "@/components/pages/gameresults/GameResultHeader";
import { LanguageContext } from "@/context/language";

const GameResult = () => {
  const { translations } = useContext(LanguageContext);
  const [tabs] = useState([
    { id: 0, title: "match" },
    { id: 1, title: "first" },
    { id: 2, title: "second" },
  ]);
  // loading
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    () => clearTimeout(timeout);
  }, []);
  return (
    <div className="flex-grow h-full flex flex-col overflow-hidden">
      {/* Header */}
      {!loading && <GameResultHeader />}

      <Tabs
        defaultTab="match"
        className="mt-1 flex-grow flex flex-col overflow-hidden"
      >
        {!loading && (
          <TabsButtons className="flex items-center bg-dark-light mb-1">
            {tabs.map((tab) => (
              <TabButton
                activeClass="tab-active"
                className="px-3 py-3 text-sm flex flex-col items-center"
                tab={tab.title}
                key={tab.id}
              >
                {translations.Stage[tab.id]}
              </TabButton>
            ))}
          </TabsButtons>
        )}
        <TabsItems className="overflow-auto scrollbar flex-grow">
          {loading && (
            <div className="h-full flex items-center justify-center grow">
              <Spinner />
            </div>
          )}
          {!loading && (
            <>
              {tabs.map((tab) => (
                <TabItem
                  key={tab.id}
                  tab={tab.title}
                  className="bg-[#2d799b] bg-opacity-25 md:bg-dark"
                >
                  {[...Array(20)].map((ar, i) => (
                    <div key={i}>
                      <GameResultWidget />
                    </div>
                  ))}
                </TabItem>
              ))}
            </>
          )}
        </TabsItems>
      </Tabs>
    </div>
  );
};

export default GameResult;
