import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "@/utils/axios";

// get translations
export const getLan = createAsyncThunk(
  "lan/getLan",
  async ({ lan }, { rejectWithValue }) => {
    try {
      Axios.defaults.headers.common["Lan"] = lan;
      const res = await Axios({ url: `/api/ox/getlan?lan=${lan}` });
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
import _translations from "@/store/data/translations";

const initialState = {
  loading: false,
  error: false,
  lan: 0,
  translations: _translations,
};

const lanSlice = createSlice({
  name: "lan",
  initialState,
  reducers: {
    setLan: (state, action) => {
      state.lan = action.payload;
      localStorage.setItem("lan", action.payload);
      Axios.defaults.headers.common["Authorization"] = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getLan.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getLan.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.translations = action.payload;
      })
      .addCase(getLan.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setLan } = lanSlice.actions;

export default lanSlice.reducer;
