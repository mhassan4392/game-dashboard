import { useState } from "react";
import "./LootboxCard.css";

const LootboxCard = ({ image, cornerImage, centerImage, numbers }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="w-48 relative flex items-center justify-center h-72 full rounded-xl overflow-hidden cursor-pointer"
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <img className="absolute right-3 top-0" src={cornerImage} alt="" />
      <img className="w-4/5" src={centerImage} />
      <div className="absolute bottom-3 lootbox-number-widget w-4/5 h-8 rounded-full flex items-center justify-center text-md font-bold text-white shadow-[0_4px_0_0_#b1570a]">
        {numbers}
      </div>
      {hovered && (
        <div className="absolute inset-0 bg-white bg-opacity-25"></div>
      )}
    </div>
  );
};

export default LootboxCard;
