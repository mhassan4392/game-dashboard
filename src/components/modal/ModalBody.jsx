const ModalBody = ({ children, middle, className, ...rest }) => {
  return (
    <div
      className={[
        "overflow-y-auto flex-grow p-3",
        middle ? "flex items-center" : "",
        className,
      ].join(" ")}
      {...rest}
    >
      {children}
    </div>
  );
};

export default ModalBody;
