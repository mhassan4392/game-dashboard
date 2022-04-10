import { createContext, useState } from "react";

export const DropdownContext = createContext({});

const DropdownProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <DropdownContext.Provider value={{ open, setOpen }}>
      {typeof children == "function" ? children(setOpen) : children}
    </DropdownContext.Provider>
  );
};

export default DropdownProvider;
