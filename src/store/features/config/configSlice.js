import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchKey } from "./configService";
import Axios from "@/utils/axios";

// get key on launch
export const getKey = createAsyncThunk(
  "config/getKey",
  async (data, { rejectWithValue }) => {
    try {
      const res = await Axios({ url: "/api/ox/launch", data });
      console.log(res);
      Axios.defaults.headers.common["Authorization"] = res.data.info.KEY;
      return res.data.info.KEY;
    } catch (error) {
      return rejectWithValue("something went wrong");
    }
  }
);

// get configuration
export const getConfig = createAsyncThunk(
  "config/getConfig",
  async (data, { rejectWithValue }) => {
    try {
      const res = await Axios({ url: "/api/ox/getConfig", data });
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
  key: null,
  config: {
    SiteName: "Game Dashboard",
    Ico: "http://devplayerui.cotu.xyz:9901/swagger/favicon-16x16.png",
  },
};

const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getKey.pending, (state) => {
        state.loading = true;
        state.errro = false;
      })
      .addCase(getKey.fulfilled, (state, action) => {
        state.loading = false;
        state.errro = false;
        state.key = action.payload;
      })
      .addCase(getKey.rejected, (state, action) => {
        state.loading = false;
        state.errro = action.payload;
      })
      .addCase(getConfig.pending, (state) => {
        state.loading = true;
        state.errro = false;
      })
      .addCase(getConfig.fulfilled, (state, action) => {
        state.loading = false;
        state.errro = false;
        state.config = action.payload;
      })
      .addCase(getConfig.rejected, (state, action) => {
        state.loading = false;
        state.errro = action.payload;
      });
  },
});

export default configSlice.reducer;
