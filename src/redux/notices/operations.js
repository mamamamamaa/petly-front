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
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const sell = createAsyncThunk(
  'notices/sell',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`/api/notices/paginateNotice?type=sell`);
      console.log(res.data);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const goodHands = createAsyncThunk(
  'notices/good-hands',
  async (page = 1, thunkAPI) => {
    const limit = 20;
    try {
      const res = await axios.get(
        `/api/notices?type=sell`
      );
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
