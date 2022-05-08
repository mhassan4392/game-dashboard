import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "@/utils/axios";

const initialState = {
  country: null,
  game: null,
  games: [],
  limit: 25,
  page: 1,
  loading: false,
  error: null,
};

export const getGames = createAsyncThunk(
  "game/getGames",
  async (_, { rejectWithValue, getState }) => {
    const { game } = getState();
    try {
      const res = await Axios({
        url: "/api/ox/gettodays",
        method: "POST",
        data: { page: game.page, limit: game.limit, na: game.country },
      });
      return res.data.info;
    } catch (error) {
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(getGames.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getGames.fulfilled, (state, action) => {
        state.loading = false;
        state.games = action.payload;
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

export const { setCountry } = gameSlice.actions;

export default gameSlice.reducer;
