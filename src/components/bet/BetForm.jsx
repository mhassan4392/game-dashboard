import { useEffect } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { BiError } from "react-icons/bi";
import countryFlags from "@/utils/countryFlags";
import { ImSpinner3 } from "react-icons/im";
import { AiOutlineCheck } from "react-icons/ai";
import { BsX } from "react-icons/bs";
import {
  setStatus,
  setBet,
  setAmount,
  setSaveError,
  setSaveSuccess,
  saveBet,
} from "@/store/features/bet/betSlice";
import { useDispatch, useSelector } from "react-redux";

const BetForm = ({ modal, onClose }) => {
  const { bet, amount, saveError, saveSuccess, saveLoading } = useSelector(
    (state) => state.bet
  );

  const { translations } = useSelector((state) => state.lan);
  const dispatch = useDispatch();
  const betAmounts = [
    { title: "+50", value: 50 },
    { title: "+100", value: 100 },
    { title: "+200", value: 200 },
    { title: "+400", value: 400 },
    { title: "+500", value: 500 },
    { title: "+MAX", value: 500 },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (amount <= 10) {
      dispatch(setSaveError("Please Enter Valid Amount"));
      return false;
    }
    await dispatch(saveBet());
  };

  useEffect(() => {
    if (saveError) {
      setTimeout(() => {
        dispatch(setSaveError(false));
      }, 3000);
    }

    if (saveSuccess) {
      setTimeout(() => {
        dispatch(setSaveSuccess(false));
      }, 3000);
    }
  }, [saveError, saveSuccess]);
  return (
    <div>
      {modal && (
        <div className="flex items-center justify-between px-2 bg-dark-light py-3 mb-1">
          <div className="flex items-center">
            <img src={countryFlags[bet.na]} className="w-4" alt="" />
            <h3 className="truncate text-xs ml-2">{bet.date}</h3>
            <h3 className="truncate text-xs ml-2">{bet.stage}</h3>
          </div>
          <div
            onClick={() => {
              dispatch(setStatus(null));
              dispatch(setBet({}));
              dispatch(setAmount(""));
              onClose();
            }}
            className="cursor-pointer p-1 text-primary bg-dark rounded"
          >
            <BsX className="text-xl" />
          </div>
        </div>
      )}
      {saveError && (
        <div className="bg-gradient-to-r from-red-500 to-red-400 text-white text-xs p-3">
          <div className="flex justify-center items-center">
            <BiError className="text-lg mr-2" /> {saveError}
          </div>
        </div>
      )}
      {saveSuccess && (
        <div className="bg-gradient-to-r from-green-500 to-green-400 text-white text-xs p-3">
          <div className="flex justify-center items-center">
            <AiOutlineCheck className="text-lg mr-2" /> {saveSuccess}
          </div>
        </div>
      )}
      <div className="border-l-2 border-l-white border-b border-b-secondary">
        {!modal && (
          <div className="flex items-center justify-between px-2 bg-dark-light py-2">
            <div className="flex items-center">
              <img src={countryFlags[bet.na]} className="w-4" alt="" />
              <h3 className="truncate text-xs ml-2">{bet.date}</h3>
              <h3 className="truncate text-xs ml-2">{bet.stage}</h3>
            </div>
            <BsFillTrashFill
              className="cursor-pointer text-primary"
              onClick={() => {
                dispatch(setStatus(null));
                dispatch(setBet({}));
                dispatch(setAmount(""));
              }}
            />
          </div>
        )}

        <div className="flex justify-between px-2 py-1">
          <div className="space-y-2">
            <h3 className="text-white text-sm">{bet.market}</h3>
            <h4 className="text-xs">{bet.status}</h4>
            <div className="text-xs">
              <p>2022 Mid-Season Invitational</p>
              {/* <p>{bet.date}</p> */}
            </div>
          </div>
          <div>
            <div className="text-sm bg-gradient-to-r from-primary to-secondary text-white font-bold border border-primary rounded px-4 py-2 ml-3">
              {bet.odds}
            </div>
          </div>
        </div>
      </div>

      <div>
        <form onSubmit={handleSubmit}>
          <div className="px-3 py-2 text-sm space-y-3">
            <div className="flex items-center space-x-2">
              <input type="checkbox" name="odds" id="bet-odds" />
              <label htmlFor="bet-odds">
                {translations?.RightSide["acceptodds"]}
              </label>
            </div>

            <div className="grid grid-cols-2 items-center">
              <div className="text-xs">
                {translations?.RightSide["betamount"]}
              </div>
              <div className="relative">
                <span className="absolute left-2 top-0.5">¥</span>
                <input
                  onChange={(e) => dispatch(setAmount(Number(e.target.value)))}
                  type="text"
                  name=""
                  value={amount}
                  className="w-full py-1 h-6 bg-transparent border border-primary border-opacity-30 pl-5 outline-none"
                  id=""
                />
              </div>
            </div>

            <div>{translations?.RightSide["betrange"]} : 10 - 8,000</div>

            <div className="grid grid-cols-3 gap-3">
              {betAmounts.map((a, i) => (
                <div
                  key={i}
                  onClick={() => {
                    dispatch(setAmount(Number(amount) + Number(a.value)));
                  }}
                  className="text-primary bg-dark-light py-2 text-center font-bold hover:bg-gradient-to-r from-primary to-secondary hover:text-white cursor-pointer"
                >
                  {a.title}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-dark-light px-3 py-2 text-sm mt-2">
            <div className="flex items-center justify-between">
              <h2>{translations?.RightSide["bettotal"]}</h2>
              <h2 className="text-lg">¥ {Number(amount).toFixed(2)}</h2>
            </div>
            <div className="flex items-center justify-between">
              <h2>{translations?.RightSide["potentialwinnings"]}</h2>
              <h2 className="text-primary text-lg">¥ 0.00</h2>
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center font-bold py-3 bg-gradient-to-r from-primary to-secondary text-white hover:from-secondary hover:to-primary transition-all duration-200"
          >
            {!saveLoading && translations?.RightSide["placebet"]}
            {saveLoading && <ImSpinner3 className="animate-spin" />}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BetForm;
