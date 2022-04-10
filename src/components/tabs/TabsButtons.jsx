const TabsButtons = ({ children, className, ...rest }) => {
  return <div className={`${className ? className : ""}`}>{children}</div>;
};

export default TabsButtons;
