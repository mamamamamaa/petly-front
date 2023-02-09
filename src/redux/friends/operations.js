import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// const { REACT_APP_SERVER_HOST } = process.env;

const fetchFriends = createAsyncThunk(
  'friends/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(
        // 'https://petly-server.onrender.com/api/friends'
        `/api/friends`
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export default fetchFriends;
