import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import VisibilitySensor from "react-visibility-sensor";
import Spinner from "@/components/spinner/Spinner";

import DateRangeModal from "./DateRangeModal";

import { getOrders, resetOrders } from "../../store/features/order/orderSlice";
import OrderWidget from "./OrderWidget";
const PendingOrders = () => {
  const isMounted = useRef(false);
  const { orders, loading } = useSelector((state) => state.order);
  const dispatch = useDispatch();
  useEffect(() => {
    const run = async () => {
      await dispatch(resetOrders());
      await dispatch(getOrders());
    };
    if (isMounted.current) {
      run();
    } else {
      isMounted.current = true;
      dispatch(resetOrders());
    }
  }, []);
  return (
    <div className="h-full flex-grow flex flex-col">
      <DateRangeModal />
      <div className="flex-grow scrollbar overflow-y-auto">
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

        <VisibilitySensor
          onChange={(isVisible) => {
            if (isVisible) {
              if (!isMounted.current) {
                dispatch(resetOrders());
              }
              dispatch(getOrders());
            }
          }}
        >
          <div className="scroller w-full h-2"></div>
        </VisibilitySensor>
        {loading && orders.length > 0 && (
          <div className={`flex items-center justify-center`}>
            <Spinner />
          </div>
        )}
      </div>
    </div>
  );
};

export default PendingOrders;
