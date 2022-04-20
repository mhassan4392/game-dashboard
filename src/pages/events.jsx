import { useState, useEffect } from "react";
import Spinner from "@/components/Spinner/Spinner";
import { TabsItems, TabItem } from "@/components/tabs";
import banner from "@/assets/images/banner.jpg";
import EventsWidget from "@/components/pages/events/EventsWidget";
import MobileBanner from "@/components/banner/MobileBanner";

const Events = () => {
  // loading
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <div className="lg:hidden">
        <MobileBanner />
      </div>
      <div>
        <img src={banner} className="h-16 w-full" alt="" />
      </div>
      <TabsItems className="flex-grow h-full scrollbar overflow-y-auto overflow-x-hidden">
        <TabItem defaultTab tab="today" className="h-full">
          {loading && (
            <div className="h-full flex items-center justify-center">
              <Spinner />
            </div>
          )}
          {!loading && (
            <div>
              {[...Array(20)].map((ar, i) => (
                <EventsWidget key={i} />
              ))}
            </div>
          )}
        </TabItem>
        <TabItem tab="early">Early</TabItem>
        <TabItem tab="inplay">InPlay</TabItem>
      </TabsItems>
    </>
  );
};

export default Events;
