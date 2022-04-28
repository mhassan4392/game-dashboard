import { useContext, useState } from "react";
import Modal from "@/components/modal/Modal";
import { FaTimes } from "react-icons/fa";

import { LanguageContext } from "@/context/language";

const LanguageMenu = ({ open, onClose }) => {
  const [langs, setLangs] = useState([
    {
      id: 0,
      title: "chinese",
    },
    {
      id: 1,
      title: "english",
    },
  ]);
  const { translations, lan, setLan } = useContext(LanguageContext);

  const handleClick = (id) => {
    setLan(id);
    onClose();
  };
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
            className={`text-sm text-center py-4 cursor-pointer ${
              lan == 0 ? "bg-secondary bg-opacity-10 text-primary" : ""
            }`}
            onClick={() => handleClick(0)}
          >
            {translations.Lan[0]}
          </div>
          <div
            className={`text-sm text-center py-4 cursor-pointer ${
              lan == 1 ? "bg-secondary bg-opacity-10 text-primary" : ""
            }`}
            onClick={() => handleClick(1)}
          >
            {translations.Lan[1]}
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default LanguageMenu;
