import { useState, useEffect } from "react";

import { format } from "date-fns";

import "./daterange.css";

import { Modal } from "@/components/modal";
import { DateRangePicker } from "react-date-range";
import { useSelector, useDispatch } from "react-redux";
import { BsCalendarDate } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
import {
  getOrders,
  resetOrders,
  setEndTime,
  setStartTime,
} from "../../store/features/order/orderSlice";
const DateRangeModal = ({ onClose }) => {
  const [dateModal, setDateModal] = useState(false);
  const dispatch = useDispatch();
  const { stime, etime } = useSelector((state) => state.order);
  const [state, setState] = useState([
    {
      startDate: new Date(new Date().getTime() - 24 * 60 * 60 * 1000),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  useEffect(() => {
    const starttime = format(new Date(state[0].startDate), "yyyy-MM-dd");
    const endtime = format(new Date(state[0].endDate), "yyyy-MM-dd");

    dispatch(setStartTime(starttime));
    dispatch(setEndTime(endtime));
  }, [state]);
  return (
    <>
      <div
        onClick={() => setDateModal(true)}
        className="flex items-center justify-between bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary py-1.5 px-2 text-white text-sm cursor-pointer mb-2 mx-2 rounded"
      >
        <BsCalendarDate />
        <div>Select Date</div>
        <BiChevronDown />
      </div>
      <Modal
        open={dateModal}
        onOutsideClick={() => setDateModal(false)}
        overlay={false}
        className="!bg-dark w-max"
        containerClass="bg-black bg-opacity-75"
        size="none"
      >
        {/* <Modal.Header>Header</Modal.Header> */}
        <Modal.Body className="p-0 overflow-hidden">
          <DateRangePicker
            onChange={(item) => setState([item.selection])}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            months={1}
            ranges={state}
            //   direction="horizontal"
          />
        </Modal.Body>
        <Modal.Footer>
          <div className="flex items-center justify-center">
            <button
              onClick={async () => {
                await dispatch(resetOrders());
                setDateModal(false);
                await dispatch(getOrders());
              }}
              className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary transition-all duration-300 px-6 py-2 rounded-xl text-white"
            >
              Apply
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DateRangeModal;
