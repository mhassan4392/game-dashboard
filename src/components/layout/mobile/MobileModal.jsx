import Modal from "../../modal/Modal";

import { AiOutlineLeft } from "react-icons/ai";

const MobileModel = ({
  open = false,
  children,
  header,
  label = false,
  modalBodyClass = "",
  modalHeaderClass = "",
  onBackClick = () => {},
  ...rest
}) => {
  return (
    <Modal
      open={open}
      fullScreen
      className="rounded-none !bg-dark"
      overlay={false}
      {...rest}
    >
      <Modal.Header className={`bg-dark-light py-0 ${modalHeaderClass}`}>
        <>
          <div className="relative">
            <div
              className="absolute left-2 top-2.5 p-1 bg-gray-800 bg-opacity-50"
              onClick={onBackClick}
            >
              <AiOutlineLeft className="text-lg text-primary" />
            </div>
            {label && (
              <div className="py-3 flex items-center justify-center">
                {label}
              </div>
            )}
          </div>
          {header ? header() : null}
        </>
      </Modal.Header>

      <Modal.Body className={`scrollbar ${modalBodyClass}`}>
        {children}
      </Modal.Body>
    </Modal>
  );
};

export default MobileModel;
