import { useState } from "react";

import { format } from "date-fns";

import { Modal } from "@/components/modal";
import { useSelector, useDispatch } from "react-redux";
import { BsCalendarDate, BsX } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
import { setDtTrigger, setDt } from "@/store/features/game/gameSlice";
import getDates from "@/utils/getDates";
const GameDatesModal = () => {
  const [dateModal, setDateModal] = useState(false);
  const dispatch = useDispatch();

  const { dt } = useSelector((state) => state.game);

  const dates = getDates();

  return (
    <>
      {/* Game Date Display Start */}
      <div
        onClick={() => setDateModal(true)}
        className="flex items-center justify-between bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary py-1 px-2 text-white text-sm cursor-pointer mx-2 rounded"
      >
        <BsCalendarDate />
        <div className="text-sm flex items-center mx-6">
          <div> {format(new Date(dt), "EE")} </div> &nbsp; &nbsp;
          <div> {dt}</div>
        </div>
        <BiChevronDown />
      </div>
      {/* Game Date Display Ebd */}

      {/* Game Dates Model Start */}
      <Modal
        open={dateModal}
        onOutsideClick={() => setDateModal(false)}
        overlay={false}
        className="!bg-dark w-max h-1/2"
        containerClass="bg-black bg-opacity-75"
      >
        <Modal.Header className="flex items-center justify-center relative">
          <h1 className="text-lg">Select Date</h1>
          <div className="absolute inset-0 flex items-center justify-end mx-2">
            <BsX
              className="text-primary text-2xl cursor-pointer"
              onClick={() => setDateModal(false)}
            />
          </div>
        </Modal.Header>
        <Modal.Body className="py-3 p-0 scrollbar">
          {dates.map((date, i) => (
            <div
              onClick={async () => {
                setDateModal(false);
                await dispatch(setDtTrigger(true));
                await dispatch(setDt(date));
              }}
              key={i}
              className={`flex items-center justify-between py-3 px-3 hover:bg-secondary hover:bg-opacity-20 cursor-pointer ${
                date == dt ? "bg-secondary bg-opacity-25 text-primary" : ""
              }`}
            >
              <div className="text-sm">{date}</div>
              <div className="text-xs">{format(new Date(date), "EE")}</div>
            </div>
          ))}
        </Modal.Body>
      </Modal>
      {/* Game Dates Modal End */}
    </>
  );
};

export default GameDatesModal;
