import { useContext, useState } from "react";
import { DropdownContext } from "./DropdownContext";

const DropdownSubMenuItem = ({
  children,
  className,
  closeMenuOnClick,
  onClick,
  label,
  ...rest
}) => {
  const { setOpen } = useContext(DropdownContext);
  const [menu, setMenu] = useState(false);
  return (
    <div
      className={[
        "p-2 shadow relative hover:text-primary block cursor-pointer transition-all duration-150",
        className,
      ].join(" ")}
      onClick={() => {
        setMenu(!menu);
      }}
      {...rest}
    >
      {label}
      {menu && <div className="absolute right-0">{children}</div>}
    </div>
  );
};

export default DropdownSubMenuItem;
