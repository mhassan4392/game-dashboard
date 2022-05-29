import { useState } from "react";
import { setStatus, setBet } from "@/store/features/bet/betSlice";
import { useSelector, useDispatch } from "react-redux";
import BetFormModal from "@/components/bet/BetFormModal";
const GameWidget = ({ bet, stage }) => {
  const dispatch = useDispatch();
  const { translations } = useSelector((state) => state.lan);
  const { game } = useSelector((state) => state.game);
  const [betFormModal, setBetFormModal] = useState(false);
  return (
    <>
      <BetFormModal
        open={betFormModal}
        onClose={() => setBetFormModal(false)}
      />
      <div className="hidden lg:flex items-start justify-between pt-2 pb-1 px-1 md:px-4 border-b border-opacity-20 border-secondary w-screen md:w-full space-x-1 md:space-x-4">
        <div className="text-xs text-[#25f09a] mt-3 basis-[15%]">
          {translations.BetsStatus[bet.Status]}
        </div>
        <div className="basis-[85%] grid grid-cols-2 px-8 relative ">
          {bet.Items.map((item, i) => (
            <>
              {i % 2 == 0 && (
                <div className="flex items-center mb-1" key={i}>
                  <div
                    onClick={(e) => {
                      dispatch(setStatus("add"));
                      dispatch(
                        setBet({
                          na: game?.Na,
                          odds: item.Odds,
                          date: game.STime,
                          market: translations?.Market[game.Name],
                          status: translations?.BetItems[item.Name],
                          itemId: item.Id,
                          stage: translations?.Stage[stage],
                          betname: translations?.Bets[bet.BetName],
                        })
                      );
                    }}
                    className="border cursor-pointer rounded border-secondary border-opacity-50 w-20 md:w-24 text-sm md:text-lg flex items-center justify-center h-10 bg-dark-light hover:bg-secondary hover:bg-opacity-30 transition-all duration-200"
                  >
                    {item.Odds}
                  </div>
                  <div className="ml-4 text-xs">
                    {translations?.BetItems[item.Name]}
                  </div>
                </div>
              )}

              {i % 2 != 0 && (
                <div className="flex items-center justify-end mb-1" key={i}>
                  <div className="mr-4 text-xs">
                    {translations?.BetItems[item.Name]}
                  </div>
                  <div
                    onClick={(e) => {
                      dispatch(setStatus("add"));
                      dispatch(
                        setBet({
                          na: game?.Na,
                          odds: item.Odds,
                          date: game.STime,
                          market: translations?.Market[game.Name],
                          status: translations?.BetItems[item.Name],
                          stage: translations?.Stage[stage],
                          betname: translations?.Bets[bet.BetName],
                        })
                      );
                    }}
                    className="border cursor-pointer rounded border-secondary border-opacity-50 w-20 md:w-24 text-sm md:text-lg flex items-center justify-center h-10 bg-dark-light hover:bg-secondary hover:bg-opacity-30 transition-all duration-200"
                  >
                    {item.Odds}
                  </div>
                </div>
              )}
            </>
          ))}

          <div className="absolute w-1/4 justify-self-center top-2 flex items-center justify-center">
            <div className="text-center text-sm">
              {translations.Bets[bet.BetName]}
            </div>
          </div>
        </div>
      </div>

      {/* sm screen */}
      <div className="border-l-2 border-primary space-y-2 py-4 text-xs text-light lg:hidden px-4 mb-3">
        <div className="flex items-center justify-between color">
          <div>{translations.Bets[bet.BetName]}</div>
          <div className="text-[#25f09a]">
            {translations.BetsStatus[bet.Status]}
          </div>
        </div>
        <div className="flex items-center justify-between flex-wrap">
          {bet.Items.map((b, i) => (
            <div
              onClick={(e) => {
                dispatch(setStatus("add"));
                dispatch(
                  setBet({
                    na: game?.Na,
                    odds: b.Odds,
                    date: game.STime,
                    market: translations?.Market[game.Name],
                    status: translations?.BetItems[b.Name],
                    stage: translations?.Stage[game?.StageForBetItem],
                    betname: translations.Bets[bet.BetName],
                  })
                );
                setBetFormModal(true);
              }}
              key={i}
              className="mb-2 cursor-pointer border border-[#2d4264] shadow-lg shadow-[#142131] flex items-center justify-between bg-[#142131] basis-[45%] py-2 px-2 rounded hover:bg-secondary hover:bg-opacity-30 transition-all duration-200"
            >
              <div>
                {/* <div className="truncate">
                  {i % 2 == 0
                    ? game?.Items[0].Name || ""
                    : game?.Items[1].Name || ""}
                </div> */}
                <div>{translations?.BetItems[b?.Name]}</div>
              </div>
              <div className="text-white text-sm">{b.Odds}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GameWidget;