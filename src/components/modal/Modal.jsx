import { AnimatePresence, motion } from "framer-motion";
import Overlay from "../overlay/Overlay";

import ModalHeader from "./ModalHeader";
import ModalBody from "./ModalBody";
import ModalFooter from "./ModalFooter";

const Modal = ({
  open,
  fullScreen,
  justify = "center",
  align = "center",
  size = "sm",
  overlay = true,
  overlayClass = "",
  overlayOpacity = 0.5,
  children,
  onOutsideClick,
  className = "",
  containerClass = "",
  ...rest
}) => {
  const outsideClickHandler = (e) => {
    if (e.target.classList.contains("modal-container") && onOutsideClick) {
      onOutsideClick();
    }
  };

  return (
    <>
      <Overlay
        opacity={overlayOpacity}
        className={overlayClass}
        open={overlay && open}
      />
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={outsideClickHandler}
            className={[
              "modal-container",
              "fixed inset-0 flex modal-container z-10",
              justify == "center" && "justify-center",
              justify == "start" && "justify-start",
              justify == "end" && "justify-end",
              align == "center" && "items-center",
              align == "start" && "items-start",
              align == "end" && "items-end",
              containerClass,
            ].join(" ")}
          >
            <div
              className={[
                "max-h-full max-w-full overflow-hidden flex flex-col m-10 bg-white rounded-lg shadow-lg",
                fullScreen && "h-full !w-full m-0",
                size == "none" && "",
                size == "sm" && "w-5/6 sm:w-2/3 md:w-1/2 lg:w-1/3",
                size == "md" && "w-5/6 sm:w-3/4 md:w-2/3 lg:w-1/2",
                size == "lg" && "w-5/6 sm:w-4/5 md:3/4 lg:w-2/3",
                className,
              ].join(" ")}
              {...rest}
            >
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;
