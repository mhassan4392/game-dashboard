import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "@/utils/axios";
import { format } from "date-fns";

let date = new Date();
date.setDate(date.getDate() + 1);

const initialState = {
  country: "ALL",
  game: null,
  games: [],
  limit: 25,
  page: 1,
  dt: format(date, "yyyy-MM-dd"),
  // dt: format(date, "yyyy/MM/dd HH:mm:ss"),
  dtTrigger: false,
  tab: "gettodays",
  tabs: [
    { id: 0, title: "today", api: "gettodays" },
    { id: 1, title: "early", api: "getearlytrade" },
    { id: 2, title: "minutes", api: "getminutes" },
    { id: 3, title: "jackpot", api: "getjackpot" },
    { id: 4, title: "outright", api: "getchampion" },
  ],
  modal: false,
  loading: false,
  error: null,
  dates: [],
};

export const getGames = createAsyncThunk(
  "game/getGames",
  async (data, { rejectWithValue, getState }) => {
    const { game } = getState();
    try {
      const dat = {
        page: game.page,
        limit: game.limit,
        na: game.country,
        dt: game.dt,
      };
      const res = await Axios.post(`/api/ox/${game.tab}`, dat);
      return res.data.info;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getEarlytradeDates = createAsyncThunk(
  "game/getEarlytradeDates",
  async (data, { rejectWithValue, getState }) => {
    try {
      const res = await Axios.get("/api/ox/getearlytradedt");
      return res.data.info;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getJackpottradeDates = createAsyncThunk(
  "game/getJackpottradeDates",
  async (data, { rejectWithValue, getState }) => {
    try {
      const res = await Axios.get("/api/ox/getjackpottradedt");
      return res.data.info;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setCountry: (state, action) => {
      state.country = action.payload;
    },
    resetGames: (state) => {
      state.games = [];
      state.page = 1;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setTab: (state, action) => {
      state.tab = action.payload;
      state.page = 1;
    },
    setGame: (state, action) => {
      state.game = action.payload;
    },
    setDt: (state, action) => {
      state.dt = action.payload;
    },
    setDtTrigger: (state, action) => {
      state.dtTrigger = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getGames.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getGames.fulfilled, (state, action) => {
        state.loading = false;
        if (typeof action.payload == "object") {
          state.games = [...state.games, ...action.payload];
        }
        if (typeof action.payload == "object" && action.payload.length > 0) {
          state.page += 1;
        }
        state.error = false;
      })
      .addCase(getGames.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getEarlytradeDates.pending, (state) => {
        state.dates = [];
      })
      .addCase(getEarlytradeDates.fulfilled, (state, action) => {
        state.dates = action.payload;
      })
      .addCase(getEarlytradeDates.rejected, (state) => {
        state.dates = [];
      })
      .addCase(getJackpottradeDates.pending, (state) => {
        state.dates = [];
      })
      .addCase(getJackpottradeDates.fulfilled, (state, action) => {
        state.dates = action.payload;
      })
      .addCase(getJackpottradeDates.rejected, (state) => {
        state.dates = [];
      });
  },
});

export const {
  setCountry,
  resetGames,
  setPage,
  setTab,
  setGame,
  setDt,
  setDtTrigger,
} = gameSlice.actions;

export default gameSlice.reducer;
