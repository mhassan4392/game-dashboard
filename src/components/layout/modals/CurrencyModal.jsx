import Modal from "@/components/modal/Modal";
import { FaTimes } from "react-icons/fa";

const CurrencyMenu = ({ open, onClose }) => {
  return (
    <Modal
      open={open}
      className="!bg-dark !max-w-xs"
      onOutsideClick={onClose}
      overlayClass="!bg-dark"
      overlayOpacity={0.7}
    >
      <Modal.Header className="bg-dark-light py-3 relative">
        <h2 className="text-center">Select Odds</h2>
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
            className="text-sm text-center py-4 bg-secondary bg-opacity-10 text-primary cursor-pointer"
            onClick={onClose}
          >
            Euro
          </div>
          <div
            className="text-sm text-center py-4 cursor-pointer"
            onClick={onClose}
          >
            Indo
          </div>
          <div
            className="text-sm text-center py-4 cursor-pointer"
            onClick={onClose}
          >
            Hongkong
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default CurrencyMenu;
