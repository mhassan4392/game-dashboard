import { useState, useEffect, useContext } from "react";
import Spinner from "@/components/Spinner/Spinner";
import {
  TabButton,
  TabItem,
  Tabs,
  TabsButtons,
  TabsItems,
} from "@/components/tabs";
import EventWidget from "@/components/pages/events/EventWidget";
import EventHeader from "@/components/pages/events/EventHeader";
import { LanguageContext } from "@/context/language";

const Event = () => {
  const { translations } = useContext(LanguageContext);
  // loading
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    () => clearTimeout(timeout);
  }, []);

  const [tabs] = useState([
    { id: 0, title: "match" },
    { id: 1, title: "first" },
    { id: 2, title: "second" },
  ]);
  return (
    <div className="flex h-full grow flex-col overflow-hidden">
      {/* Header */}
      {!loading && <EventHeader />}

      <Tabs
        defaultTab="match"
        className="mt-1 grow h-full flex flex-col overflow-hidden"
      >
        {!loading && (
          <TabsButtons className="flex items-center bg-dark-light mb-1">
            {tabs.map((tab) => (
              <TabButton
                activeClass="tab-active"
                className="px-3 py-3 text-sm flex flex-col items-center"
                tab={tab.title}
              >
                {translations.Stage[tab.id]}
              </TabButton>
            ))}
          </TabsButtons>
        )}
        <TabsItems className="flex-grow h-full scrollbar overflow-y-auto overflow-x-hidden">
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
                      <EventWidget />
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

export default Event;
