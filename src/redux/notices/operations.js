import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const { REACT_APP_SERVER_HOST: HOST } = process.env;

axios.defaults.baseURL = HOST;

export const search = createAsyncThunk(
  'notices/search',
  async (firstName, thunkAPI) => {
    try {
      const res = await axios.get(
        `/api/notices/searchManyTitles?title=${firstName}`
      );
      console.log(res.data);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);