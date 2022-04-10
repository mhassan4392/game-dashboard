import { useContext } from "react";
import { DropdownContext } from "./DropdownContext";

const DropdownMenuItem = ({
  children,
  className,
  closeMenuOnClick,
  onClick,
  ...rest
}) => {
  const { setOpen } = useContext(DropdownContext);
  return (
    <div
      className={[
        "p-2 shadow hover:text-primary block cursor-pointer transition-all duration-150",
        className,
      ].join(" ")}
      onClick={() => {
        onClick && onClick();
        closeMenuOnClick && setOpen(false);
      }}
      {...rest}
    >
      {children}
    </div>
  );
};

DropdownMenuItem.defaultProps = {
  closeMenuOnClick: true,
};

export default DropdownMenuItem;
