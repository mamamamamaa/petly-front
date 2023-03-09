import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const { REACT_APP_SERVER_HOST } = process.env;

export const fetchFriends = createAsyncThunk(
  'friends/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(`${REACT_APP_SERVER_HOST}/api/friends`);
      return data.data.result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchTeam = createAsyncThunk(
  'friends/team',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `${REACT_APP_SERVER_HOST}/api/friends/team`
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
