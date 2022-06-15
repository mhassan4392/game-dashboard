import hand from "@/assets/images/hand.png";
import { useSelector } from "react-redux";
import "./index.scss";

const EmptyBet = () => {
  const { translations } = useSelector((state) => state.lan);
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <p className="text-center text-sm px-3">
        {translations.RightSide["betempty"]}
      </p>
      <button className="px-5 py-1 rounded border border-primary border-opacity-25 mt-3 hand-button">
        x.x.x
      </button>
      <img src={hand} className="w-10 ml-12 -mt-6 hand-image" alt="" />
    </div>
  );
};

export default EmptyBet;
