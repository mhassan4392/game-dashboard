import { BsFillTrashFill } from "react-icons/bs";
import countryFlags from "@/utils/countryFlags";
import { setStatus } from "@/store/features/bet/betSlice";
import { useDispatch, useSelector } from "react-redux";
const BetForm = () => {
  const { odds } = useSelector((state) => state.bet);
  const dispatch = useDispatch();
  const betAmounts = ["+50", "+100", "+200", "+500", "+1000", "+MAX"];
  return (
    <div>
      <div className="border-l-2 border-l-white border-b border-b-secondary">
        <div className="flex items-center justify-between px-2 bg-dark-light py-2">
          <div className="flex items-center">
            <img src={countryFlags["CN"]} className="w-4" alt="" />
            <h3 className="truncate text-xs ml-2">League of Legends</h3>
          </div>
          <BsFillTrashFill
            className="cursor-pointer text-primary"
            onClick={() => dispatch(setStatus(null))}
          />
        </div>

        <div className="flex justify-between px-2 py-1">
          <div className="space-y-2">
            <h3 className="text-white text-sm">G2 Sports</h3>
            <h4 className="text-xs">Winner</h4>
            <div className="text-xs">
              <p>2022 Mid-Season Invitational</p>
              <p>Evil Geniuses vs G2 Esports</p>
            </div>
          </div>
          <div>
            <div className="text-sm bg-gradient-to-r from-primary to-secondary text-white font-bold border border-primary rounded px-4 py-2 ml-3">
              {odds}
            </div>
          </div>
        </div>
      </div>

      <div>
        <form>
          <div className="px-3 py-2 text-sm space-y-3">
            <div className="flex items-center space-x-2">
              <input type="checkbox" name="odds" id="bet-odds" />
              <label htmlFor="bet-odds">Accept any odds</label>
            </div>

            <div className="grid grid-cols-2 items-center">
              <div className="text-xs">Bet Amount</div>
              <div className="relative">
                <span className="absolute left-2 top-0.5">¥</span>
                <input
                  type="number"
                  min={10}
                  max={8000}
                  name=""
                  className="w-full py-1 h-6 bg-transparent border border-primary border-opacity-30 pl-5 outline-none"
                  id=""
                />
              </div>
            </div>

            <div>MIN - MAX BET AMOUNT : 10 - 8,000</div>

            <div className="grid grid-cols-3 gap-3">
              {betAmounts.map((amount, i) => (
                <div className="text-primary bg-dark-light py-2 text-center font-bold hover:bg-gradient-to-r from-primary to-secondary hover:text-white cursor-pointer">
                  {amount}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-dark-light px-3 py-2 text-sm mt-2">
            <div className="flex items-center justify-between">
              <h2>Total Bet Amounts</h2>
              <h2 className="text-lg">¥ 0.00</h2>
            </div>
            <div className="flex items-center justify-between">
              <h2>Potential Wininngs</h2>
              <h2 className="text-primary text-lg">¥ 0.00</h2>
            </div>
          </div>

          <button className="w-full font-bold py-3 bg-gradient-to-r from-primary to-secondary text-white hover:from-secondary hover:to-primary transition-all duration-200">
            PLACE BET
          </button>
        </form>
      </div>
    </div>
  );
};

export default BetForm;