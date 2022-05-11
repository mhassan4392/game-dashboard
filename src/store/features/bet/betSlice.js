import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "@/utils/axios";

const initialState = {
  bets: [],
  loading: false,
  error: null,
  saveLoading: false,
  saveError: false,
  saveSuccess: false,
  status: null,
  slip: null,
  bet: null,
  amount: "",
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

export const saveBet = createAsyncThunk(
  "bet/saveBet",
  async (data, { rejectWithValue, getState }) => {
    const { bet } = getState();
    try {
      const res = await Axios.post(`/api/ox/orders`, {
        amount: Number(bet.amount),
        itemId: bet.bet.itemId,
        odds: bet.bet.odds,
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
    setAmount: (state, action) => {
      state.amount = action.payload;
    },
    setBet: (state, action) => {
      state.bet = action.payload;
    },
    setSaveError: (state, action) => {
      state.saveError = action.payload;
    },
    setSaveSuccess: (state, action) => {
      state.saveSuccess = action.payload;
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
      })
      .addCase(saveBet.pending, (state) => {
        state.saveLoading = true;
        state.saveError = false;
      })
      .addCase(saveBet.fulfilled, (state, action) => {
        state.saveLoading = false;
        state.saveError = false;
        state.saveSuccess = "Bet Added Successfully";
      })
      .addCase(saveBet.rejected, (state, action) => {
        state.saveLoading = false;
        state.saveError = action.payload;
      });
  },
});

export const {
  setStatus,
  setOdds,
  setAmount,
  setBet,
  setSaveSuccess,
  setSaveError,
} = gameSlice.actions;

export default gameSlice.reducer;
