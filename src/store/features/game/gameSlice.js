import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "@/utils/axios";

const initialState = {
  country: "CN",
  game: null,
  games: [],
  limit: 25,
  page: 1,
  loading: false,
  error: null,
};

export const getGames = createAsyncThunk(
  "game/getGames",
  async (data, { rejectWithValue, getState, dispatch }) => {
    const { game } = getState();
    console.log(game.page);
    try {
      const dat = {
        page: game.page,
        limit: game.limit,
        na: game.country,
      };
      const formData = new FormData();
      formData.append("page", dat.page);
      formData.append("limit", dat.limit);
      formData.append("na", game.country);
      const config = {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      };
      const res = await Axios.post("/api/ox/gettodays", dat, config);
      // console.log(res);
      return res.data.info;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  }
);

export const getGame = createAsyncThunk(
  "game/getGame",
  async (_data, { rejectWithValue }) => {
    try {
      return true;
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(getGames.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getGames.fulfilled, (state, action) => {
        state.loading = false;
        state.games = [...state.games, ...action.payload];
        state.page += 1;
        state.error = false;
      })
      .addCase(getGames.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getGame.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getGame.fulfilled, (state, action) => {
        state.loading = false;
        state.game = action.payload;
        state.error = false;
      })
      .addCase(getGame.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setCountry, resetGames, setPage } = gameSlice.actions;

export default gameSlice.reducer;
