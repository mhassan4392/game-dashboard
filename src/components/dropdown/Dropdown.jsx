import { useRef, useEffect } from "react";
import DropdownProvider from "./DropdownContext";

const Dropdown = ({ children, className, hover, persistent, ...rest }) => {
  // close menu function
  let closeMenu;
  // dropdown ref
  const dropdown = useRef(null);

  useEffect(() => {
    // listen for outside click event to close menu
    window.addEventListener("click", (e) => {
      if (
        !persistent &&
        dropdown.current &&
        !dropdown.current.contains(e.target)
      ) {
        // close menu
        closeMenu(false);
      }
    });
  }, [persistent]);

  return (
    <DropdownProvider>
      {(setOpen) => {
        // set colse menu to setOpen to close the menu on outside click
        closeMenu = setOpen;
        return (
          <div
            ref={dropdown}
            onMouseEnter={() => hover && setOpen(true)}
            onMouseLeave={() => hover && setOpen(false)}
            className={["relative inline", className].join(" ")}
            {...rest}
          >
            {children}
          </div>
        );
      }}
    </DropdownProvider>
  );
};

export default Dropdown;
