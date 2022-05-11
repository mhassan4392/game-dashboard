import { useSelector } from "react-redux";

const OrderWidget = ({ order }) => {
  const { translations } = useSelector((state) => state.lan);
  console.log(order);
  return (
    <div className="border-l-2 border-primary space-y-2 py-4 text-xs text-light px-4 mb-3">
      <div className="flex items-center justify-between color">
        <div>{translations?.GameCategory[order?.CateId]}</div>
        <div className="text-[#25f09a]">{order.Amount}</div>
      </div>
      <div className="flex items-center justify-between color">
        <div>{translations?.Market[order?.GameName]}</div>
        <div className="text-[#25f09a]">{order.Award}</div>
      </div>
      <div className="flex items-center justify-between flex-wrap">
        <div className="mb-2 cursor-pointer border border-[#2d4264] shadow-lg shadow-[#142131] flex items-center justify-between bg-[#142131] basis-[45%] py-1 px-2 rounded">
          <div>
            <div>{translations?.BetItems[order?.GameBetItemName]}</div>
          </div>
          <div className="text-white text-sm">{order.Odds}</div>
        </div>
        <div className="text-[#25f09a]">
          {translations?.OrderStatus[order?.Status]}
        </div>
      </div>
      <div className="flex items-center justify-between color">
        <div>{translations?.Stage[order?.Stage]}</div>
        <div className="text-[#25f09a]">{order.RewardTime}</div>
      </div>
    </div>
  );
};

export default OrderWidget;
