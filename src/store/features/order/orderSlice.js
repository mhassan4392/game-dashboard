import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "@/utils/axios";

import format from "date-fns/format";

const stime = format(
  new Date(new Date().getTime() - 24 * 60 * 60 * 1000),
  "yyyy-MM-dd"
);
const etime = format(new Date(), "yyyy-MM-dd");

const initialState = {
  orders: [],
  loading: false,
  error: false,
  page: 1,
  limit: 25,
  stime,
  etime,
  type: 1,
};

export const getOrders = createAsyncThunk(
  "order/getOrders",
  async (_, { rejectWithValue, getState }) => {
    const { order } = getState();
    try {
      const dat = {
        page: order.page,
        limit: order.limit,
        stime: order.stime,
        etime: order.etime,
        type: 1,
      };
      const res = await Axios.get(
        `/api/ox/orderlist?page=${dat.page}&limit=${dat.limit}&stime=${dat.stime}&etime=${dat.etime}&type=${dat.type}`,
        dat
      );
      return res.data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    resetOrders: (state) => {
      state.orders = [];
      state.page = 1;
    },
    setStartTime: (state, action) => {
      state.stime = action.payload;
    },
    setEndTime: (state, action) => {
      state.etime = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOrders.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        state.loading = false;
        if (typeof action.payload == "object") {
          state.orders = [...state.orders, ...action.payload];
        }
        if (typeof action.payload == "object" && action.payload.length > 0) {
          state.page += 1;
        }
        state.error = false;
      })
      .addCase(getOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setPage, resetOrders, setStartTime, setEndTime } =
  orderSlice.actions;

export default orderSlice.reducer;
