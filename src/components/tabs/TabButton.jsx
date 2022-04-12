import { useContext } from "react";
import { TabsContext } from "./TabsContext";
const TabButton = ({
  children,
  className,
  activeClass,
  tab,
  as: As = "button",
  ...rest
}) => {
  const { setTab, tab: tab_ } = useContext(TabsContext);
  return (
    <As
      onClick={() => setTab(tab)}
      className={`${className ? className : ""} ${
        tab == tab_ ? activeClass : ""
      }`}
      {...rest}
    >
      {typeof children == "function" ? children() : children}
    </As>
  );
};

export default TabButton;
