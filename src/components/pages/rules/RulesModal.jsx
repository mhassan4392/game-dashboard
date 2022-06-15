import MobileModel from "@/components/layout/modals/MobileModal";
import RulesContent from "./RulesContent";

const RulesMenu = ({ open, onClose }) => {
  return (
    <div>
      <MobileModel label="Rules" onBackClick={onClose} open={open}>
        <RulesContent />
      </MobileModel>
    </div>
  );
};

export default RulesMenu;
