import Modal from "@/components/modal/Modal";
import { FaTimes } from "react-icons/fa";

const LanguageMenu = ({ open, onClose }) => {
  return (
    <Modal
      open={open}
      className="!bg-dark !max-w-xs"
      onOutsideClick={onClose}
      overlayClass="!bg-dark"
      overlayOpacity={0.7}
    >
      <Modal.Header className="bg-dark-light py-3 relative">
        <h2 className="text-center">Select Language</h2>
        <span
          className="absolute right-4 top-4 text-primary cursor-pointer"
          onClick={onClose}
        >
          <FaTimes />
        </span>
      </Modal.Header>
      <Modal.Body className="px-0">
        <div>
          <div
            className="text-sm text-center py-4 cursor-pointer"
            onClick={onClose}
          >
            Chinese
          </div>
          <div
            className="text-sm text-center py-4 bg-secondary bg-opacity-10 text-primary cursor-pointer"
            onClick={onClose}
          >
            Eng
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default LanguageMenu;
