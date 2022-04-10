import { TabsItems, TabItem } from "../components/tabs";
import banner from "../assets/images/banner.jpg";

import EventsMatch from "../components/pages/events/EventsMatch";
const Events = () => {
  const events = [{}];
  return (
    <>
      <div>
        <img src={banner} className="h-16 w-full" alt="" />
      </div>
      <TabsItems className="flex-grow scrollbar overflow-auto">
        <TabItem defaultTab tab="today">
          {[...Array(20)].map((ar, i) => (
            <EventsMatch key={i} />
          ))}
          <EventsMatch />
        </TabItem>
        <TabItem tab="early">Early</TabItem>
        <TabItem tab="inplay">InPlay</TabItem>
        <TabItem tab="combo">Combo</TabItem>
        <TabItem tab="outright">Outright</TabItem>
      </TabsItems>
    </>
  );
};

export default Events;
