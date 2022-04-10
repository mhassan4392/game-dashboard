import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "react";
import { DropdownContext } from "./DropdownContext";

const DropdownMenu = ({ children, className, right, ...rest }) => {
  const { open } = useContext(DropdownContext);
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={[
            "absolute bg-white rounded-lg shadow-xl w-max z-10 overflow-hidden",
            right ? "right-0" : "",
            className,
          ].join(" ")}
          {...rest}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DropdownMenu;
