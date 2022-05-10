import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "@/utils/axios";

const initialState = {
  bets: [],
  loading: false,
  error: null,
};

export const getBets = createAsyncThunk(
  "bet/getBets",
  async (data, { rejectWithValue }) => {
    try {
      const res = await Axios.post(`/api/ox/getbets/${data.id}`, {
        id: Number(data.id),
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
  reducers: {},
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

export default gameSlice.reducer;
