import { TabsProvider, TabsContext } from "./TabsContext";

const Tabs = ({ children, className, tab, ...rest }) => {
  return (
    <TabsProvider>
      <div className={`${className ? className : ""}`}>{children}</div>
    </TabsProvider>
  );
};

export default Tabs;
