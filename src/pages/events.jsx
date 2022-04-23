import { useState, useEffect } from "react";
import Spinner from "@/components/Spinner/Spinner";
import { TabsItems, TabItem } from "@/components/tabs";
import banner from "@/assets/images/banner.jpg";
import EventsWidget from "@/components/pages/events/EventsWidget";
import MobileBanner from "@/components/banner/MobileBanner";
import { useOutletContext } from "react-router-dom";

const Events = () => {
  const { tab } = useOutletContext();
  // loading
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    console.log("hello");
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    () => clearTimeout(timeout);
  }, [tab]);

  const items = [{ tab: "today" }, { tab: "yesterday" }, { tab: "daybefore" }];

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
        {items.map((item) => (
          <>
            {!loading && (
              <TabItem tab={item.tab} className="h-full">
                <div>
                  {[...Array(20)].map((ar, i) => (
                    <EventsWidget key={i} />
                  ))}
                </div>
              </TabItem>
            )}
          </>
        ))}
      </TabsItems>
    </>
  );
};

export default Events;
