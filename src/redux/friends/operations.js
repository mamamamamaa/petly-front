import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// const { REACT_APP_SERVER_HOST } = process.env;
// 'https://petly-server.onrender.com/api/friends'
const fetchFriends = createAsyncThunk(
  'friends/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/api/friends`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export default fetchFriends;
