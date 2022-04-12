const ModalFooter = ({ children, className, ...rest }) => {
  return (
    <div className={["p-3 shadow-inner", className].join(" ")} {...rest}>
      {children}
    </div>
  );
};

export default ModalFooter;
