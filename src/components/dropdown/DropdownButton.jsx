import { useContext } from "react";
// import Button from "../button/Butoon";
import { DropdownContext } from "./DropdownContext";

const DropdownButton = ({
  children,
  className,
  as: As = "button",
  ...rest
}) => {
  const { open, setOpen } = useContext(DropdownContext);
  return (
    <As
      className={["cursor-pointer relative ", className].join(" ")}
      onClick={() => setOpen(!open)}
      {...rest}
    >
      {typeof children == "function" ? children(open) : children}
    </As>
  );
};

export default DropdownButton;
