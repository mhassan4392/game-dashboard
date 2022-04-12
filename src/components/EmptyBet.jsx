import hand from "../assets/images/hand.png";

const EmptyBet = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <p className="text-center text-sm px-3">
        Your bet slip is empty. Start betting by clicking on the odds.
      </p>
      <button className="px-5 py-1 rounded border border-primary border-opacity-25 mt-3 hand-button">
        x.x.x
      </button>
      <img src={hand} className="w-10 ml-12 -mt-6 hand-image" alt="" />
    </div>
  );
};

export default EmptyBet;
