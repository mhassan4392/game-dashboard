const ModalHeader = ({ children, className, ...rest }) => {
  return (
    <div className={["p-3 shadow", className].join(" ")} {...rest}>
      {children}
    </div>
  );
};

export default ModalHeader;
