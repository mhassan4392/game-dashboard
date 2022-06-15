import { Modal } from "@/components/modal";
import BetForm from "./BetForm";
const BetFormModel = ({ open, onClose }) => {
  return (
    <Modal
      open={open}
      className="!bg-dark text-light !rounded-2xl"
      overlay={false}
      onOutsideClick={onClose}
      containerClass="bg-black bg-opacity-75"
    >
      <Modal.Body className="bg-dark p-0">
        <BetForm modal={true} onClose={onClose} />
      </Modal.Body>
    </Modal>
  );
};

export default BetFormModel;
