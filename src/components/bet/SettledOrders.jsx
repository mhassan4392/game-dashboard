import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "@/components/spinner/Spinner";

import DateRangeModal from "./DateRangeModal";
import isVisible from "@/utils/isVisible";

import {
  getOrders,
  resetOrders,
  setType,
} from "@/store/features/order/orderSlice";
import OrderWidget from "./OrderWidget";
const SettledOrders = () => {
  const visibleRef = useRef();
  const isMounted = useRef(false);
  const { orders, loading } = useSelector((state) => state.order);
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const run = async () => {
      await dispatch(getOrders());
    };
    if (isMounted.current && visible) {
      run();
    }
  }, [visible]);

  useEffect(() => {
    const run = async () => {
      await dispatch(resetOrders());
      await dispatch(setType(1));
      await dispatch(getOrders());
      isMounted.current = true;
    };
    run();
  }, []);

  const scrollDiv = async (e) => {
    const isvisible = isVisible(visibleRef);
    if (isvisible && e.deltaY > 0 && !loading) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  return (
    <div className="h-full flex-grow flex flex-col">
      <DateRangeModal />
      <div className="flex-grow scrollbar overflow-y-auto" onWheel={scrollDiv}>
        {orders.map((order, i) => (
          <div key={i}>
            <OrderWidget order={order} />
          </div>
        ))}

        {loading && !orders.length && (
          <div className={`flex items-center justify-center h-4/5`}>
            <Spinner />
          </div>
        )}

        <div ref={visibleRef} className="s-screen w-full h-2"></div>
        {loading && orders.length > 0 && (
          <div className={`flex items-center justify-center`}>
            <Spinner />
          </div>
        )}
      </div>
    </div>
  );
};

export default SettledOrders;
