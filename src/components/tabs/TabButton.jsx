import { useContext } from "react";
import { TabsContext } from "./TabsContext";
import { Link } from "react-router-dom";
const TabButton = ({
  children,
  className,
  activeClass,
  tab,
  onClick = () => {},
  as: As = "button",
  ...rest
}) => {
  const { setTab, tab: tab_ } = useContext(TabsContext);
  if (As == "Link") {
    return (
      <Link
        onClick={() => {
          setTab(tab);
          onClick();
        }}
        className={`${className ? className : ""} ${
          tab == tab_ ? activeClass : ""
        }`}
        {...rest}
      >
        {typeof children == "function" ? children() : children}
      </Link>
    );
  }
  return (
    <As
      onClick={() => {
        setTab(tab);
        onClick();
      }}
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
