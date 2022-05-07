import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "@/utils/axios";

// get translations
export const getLan = createAsyncThunk(
  "lan/getLan",
  async (data, { rejectWithValue }) => {
    try {
      const res = await Axios({ url: "/api/ox/getlan?lan=1", data });
      console.log(res);
      return res.data;
    } catch (error) {
      return rejectWithValue("something went wrong");
    }
  }
);
import _translations from "@/store/data/translations";

const initialState = {
  loading: false,
  errro: false,
  lan: 0,
  translations: _translations,
};

const lanSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    setLan: (state, action) => {
      state.lan = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getLan.pending, (state) => {
        state.loading = true;
        state.errro = false;
      })
      .addCase(getLan.fulfilled, (state, action) => {
        state.loading = false;
        state.errro = false;
        state.translations = action.payload;
      })
      .addCase(getLan.rejected, (state, action) => {
        state.loading = false;
        state.errro = action.payload;
      });
  },
});

export const { setLan } = lanSlice.actions;

export default lanSlice.reducer;
