import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "@/utils/axios";

// get translations
export const getUser = createAsyncThunk(
  "lan/getUser",
  async (data, { rejectWithValue }) => {
    try {
      const res = await Axios({ url: "/api/ox/userinfo", data });
      console.log(res);
      return res.data.info;
    } catch (error) {
      return rejectWithValue("something went wrong");
    }
  }
);

const initialState = {
  loading: false,
  errro: false,
  user: null,
};

const userSlice = createSlice({
  name: "config",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.loading = true;
        state.errro = false;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.loading = false;
        state.errro = false;
        state.user = action.payload;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.loading = false;
        state.errro = action.payload;
      });
  },
});

export default userSlice.reducer;