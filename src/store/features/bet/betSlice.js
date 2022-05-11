import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "@/utils/axios";

const initialState = {
  bets: [],
  loading: false,
  error: null,
  status: null,
  slip: null,
  bet: null,
  odds: "",
  amount: 0,
  itemId: "",
};

export const getBets = createAsyncThunk(
  "bet/getBets",
  async (data, { rejectWithValue }) => {
    try {
      const res = await Axios.post(`/api/ox/getbets/${data.id}`, {});
      console.log(res);
      return res.data.info;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
);

export const saveBets = createAsyncThunk(
  "bet/saveBet",
  async (data, { rejectWithValue, getState }) => {
    const { bet } = getState();
    try {
      const res = await Axios.post(`/api/ox/orders`, {
        amount: bet.amount,
        itemId: bet.itemId,
        odds: bet.odds,
      });
      // console.log(res);
      return res.data.info;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
);

const gameSlice = createSlice({
  name: "bet",
  initialState,
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setOdds: (state, action) => {
      state.odds = action.payload;
    },
    setAmount: (state, action) => {
      state.amount = action.payload;
    },
    setBet: (state, action) => {
      state.bet = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBets.pending, (state) => {
        state.bets = [];
        state.loading = true;
        state.error = false;
      })
      .addCase(getBets.fulfilled, (state, action) => {
        state.loading = false;
        state.bets = action.payload;
        state.error = false;
      })
      .addCase(getBets.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setStatus, setOdds, setAmount, setBet } = gameSlice.actions;

export default gameSlice.reducer;
