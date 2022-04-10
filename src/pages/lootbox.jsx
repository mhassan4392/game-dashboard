import lootboxImage from "../assets/images/lootboxImage.png";
import lootboxCenterImage from "../assets/images/lootboxCenterImage.png";
import lootboxCornerImage from "../assets/images/lootboxCornerImage.svg";
import LootboxCard from "../components/pages/lootbox/LootboxCard";

const Lootbox = () => {
  return (
    <div className="p-4 scrollbar overflow-auto h-full">
      <div className="flex items-center flex-wrap gap-10">
        {[...Array(10)].map((ar, i) => (
          <LootboxCard
            key={i}
            image={lootboxImage}
            centerImage={lootboxCenterImage}
            cornerImage={lootboxCornerImage}
            numbers="1,000 - 2k"
          />
        ))}
      </div>
    </div>
  );
};

export default Lootbox;
