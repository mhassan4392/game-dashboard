import { AnimatePresence, motion } from "framer-motion";

const Overlay = ({ children, className, open, opacity = 0.5, ...rest }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity }}
          exit={{ opacity: 0 }}
          className={["fixed inset-0 bg-primary", className].join(" ")}
          {...rest}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Overlay;
