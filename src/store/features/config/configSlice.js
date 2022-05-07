import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "@/utils/axios";

// get key on launch
export const getKey = createAsyncThunk(
  "config/getKey",
  async ({ lan, key, name }, { rejectWithValue }) => {
    try {
      const res = await Axios({
        url: `/api/ox/launch?lan=${lan}&key=${key}&name=${name}`,
      });
      Axios.defaults.headers.common["Authorization"] = res.data.info.KEY;
      return res.data.info.KEY;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// get configuration
export const getConfig = createAsyncThunk(
  "config/getConfig",
  async (data, { rejectWithValue }) => {
    try {
      const res = await Axios({ url: "/api/ox/getConfig", data });
      return res.data.info;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  loading: false,
  errro: false,
  key: null,
  name: "",
  config: {
    SiteName: "Game Dashboard",
    Ico: "http://devplayerui.cotu.xyz:9901/swagger/favicon-16x16.png",
  },
};

const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    setKey: (state, action) => {
      state.key = action.payload;
      localStorage.setItem(action.payload);
    },
    setName: (state, action) => {
      state.name = action.payload;
      localStorage.setItem("name", action.payload);
    },
  },
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
        localStorage.setItem("key", action.payload);
        Axios.defaults.headers.common["Authorization"] = action.payload;
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

export const { setKey, setName } = configSlice.actions;

export default configSlice.reducer;
