import TabsContainer from "./TabsContainer";
import { TabsProvider, TabsContext } from "./TabsContext";

const Tabs = ({ ...rest }) => {
  return (
    // <TabsProvider>
    //   <div className={`${className ? className : ""}`}>
    //     {typeof children == "function" ? children() : children}
    //   </div>
    // </TabsProvider>
    <TabsProvider>
      <TabsContainer {...rest}></TabsContainer>
    </TabsProvider>
  );
};

export default Tabs;
