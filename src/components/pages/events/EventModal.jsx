import MobileModel from "@/components/layout/modals/MobileModal";
import { TabItem, Tabs, TabsItems } from "@/components/tabs";
import EventWidget from "@/components/pages/events/EventWidget";
import EventModalHeader from "@/components/pages/events/EventModalHeader";

const EventModal = ({ open, onClose }) => {
  return (
    <div className="">
      <Tabs>
        <MobileModel
          onBackClick={onClose}
          open={open}
          modalBodyClass="overflow-hidden p-0 bg-[#2d799b] bg-opacity-25 md:bg-dark"
          modalHeaderClass="p-0"
          header={() => <EventModalHeader />}
        >
          <TabsItems className="overflow-auto scrollbar flex-grow">
            <TabItem defaultTab tab="match" className="py-2">
              {[...Array(20)].map((ar, i) => (
                <EventWidget key={i} />
              ))}
            </TabItem>
            <TabItem tab="firsthalf" className="bg-dark"></TabItem>
          </TabsItems>
        </MobileModel>
      </Tabs>
    </div>
  );
};

export default EventModal;
