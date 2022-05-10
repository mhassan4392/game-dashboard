import { useSelector } from "react-redux";
const EventWidget = ({ bet }) => {
  const { translations } = useSelector((state) => state.lan);
  const { game } = useSelector((state) => state.game);
  return (
    <>
      <div className="hidden md:flex items-start justify-between pt-2 pb-1 px-1 md:px-4 border-b border-opacity-20 border-secondary w-screen md:w-full space-x-1 md:space-x-4">
        <div className="text-xs text-[#25f09a] mt-3 basis-[15%]">
          {translations.BetsStatus[bet.Status]}
        </div>
        <div className="basis-[85%] grid grid-cols-2 px-8 relative ">
          <div className="absolute w-full top-2 flex items-center justify-center">
            <div className="w-1/4 text-center text-sm">
              {translations.Bets[bet.BetName]}
            </div>
          </div>
          {bet.Items.map((item, i) => (
            <>
              {i % 2 == 0 && (
                <div className="flex items-center mb-1" key={i}>
                  <div className="border border-secondary border-opacity-50 w-20 md:w-24 text-sm md:text-lg flex items-center justify-center h-10 bg-dark-light ">
                    {item.Odds}
                  </div>
                  <div className="ml-4 text-xs">{item.Name}</div>
                </div>
              )}

              {i % 2 != 0 && (
                <div className="flex items-center justify-end mb-1" key={i}>
                  <div className="mr-4 text-xs">{item.Name}</div>
                  <div className="border border-secondary border-opacity-50 w-20 md:w-24 text-sm md:text-lg flex items-center justify-center h-10 bg-dark-light ">
                    {item.Odds}
                  </div>
                </div>
              )}
            </>
          ))}
        </div>
      </div>

      {/* sm screen */}
      <div className="border-l-2 border-primary space-y-2 py-4 text-xs text-light md:hidden px-4 mb-3">
        <div className="flex items-center justify-between color">
          <div>{translations.Bets[bet.BetName]}</div>
          <div className="text-[#25f09a]">
            {translations.BetsStatus[bet.Status]}
          </div>
        </div>
        <div className="flex items-center justify-between flex-wrap">
          {bet.Items.map((b, i) => (
            <div
              key={i}
              className="mb-2 border border-[#2d4264] shadow-lg shadow-[#142131] flex items-center justify-between bg-[#142131] basis-[45%] py-1 px-2 rounded"
            >
              <div>
                <div className="truncate">
                  {i % 2 == 0
                    ? game?.Items[0].Name || ""
                    : game?.Items[1].Name || ""}
                </div>
                <div>{b.Name}</div>
              </div>
              <div className="text-white text-sm">{b.Odds}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default EventWidget;
