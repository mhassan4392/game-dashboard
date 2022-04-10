import { useContext } from "react";
// import Button from "../button/Butoon";
import { DropdownContext } from "./DropdownContext";

const DropdownButton = ({ children, className, ...rest }) => {
  const { open, setOpen } = useContext(DropdownContext);
  return (
    <button
      className={["cursor-pointer relative ", className].join(" ")}
      onClick={() => setOpen(!open)}
      {...rest}
    >
      {typeof children == "function" ? children(open) : children}
    </button>
  );
};

export default DropdownButton;
