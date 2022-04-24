import { useState, useEffect } from "react";
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

const Event = () => {
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
    <div className="flex h-full grow flex-col overflow-hidden">
      {/* Header */}
      {!loading && <EventHeader />}

      <Tabs className="mt-1 grow h-full flex flex-col overflow-hidden">
        {!loading && (
          <TabsButtons className="flex items-center bg-dark-light mb-1">
            <TabButton
              activeClass="tab-active"
              className="px-3 py-3 text-sm flex flex-col items-center"
              tab="match"
            >
              Match (2)
            </TabButton>
            <TabButton
              activeClass="tab-active"
              className="px-3 py-3 text-sm flex flex-col items-center"
              tab="firsthalf"
            >
              First Half (2)
            </TabButton>
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
              <TabItem
                defaultTab
                tab="match"
                className="bg-[#2d799b] bg-opacity-25 md:bg-dark"
              >
                {[...Array(20)].map((ar, i) => (
                  <div key={i}>
                    <EventWidget />
                  </div>
                ))}
              </TabItem>
              <TabItem tab="firsthalf" className="bg-dark">
                {[...Array(20)].map((ar, i) => (
                  <div key={i}>
                    <EventWidget />
                  </div>
                ))}
              </TabItem>
            </>
          )}
        </TabsItems>
      </Tabs>
    </div>
  );
};

export default Event;
