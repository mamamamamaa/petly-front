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
  async (page = 1, thunkAPI) => {
    const limit = 20;
    try {
      const res = await axios.get(
        `/api/notices/paginateNotice?type=sell&page=${page}&limit=${limit}`
      );
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const goodHands = createAsyncThunk(
  'notices/goodHands',
  async (page = 1, thunkAPI) => {
    const limit = 20;
    try {
      const res = await axios.get(
        `/api/notices/paginateNotice?type=good-hands&page=${page}&limit=${limit}`
      );
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const lostFound = createAsyncThunk(
  'notices/lostFound',
  async (page = 1, thunkAPI) => {
    const limit = 20;
    try {
      const res = await axios.get(
        `/api/notices/paginateNotice?type=lost/found&page=${page}&limit=${limit}`
      );
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteNotice = createAsyncThunk(
  'notices/delete',
  async ({ id, type }, thunkAPI) => {
    try {
      await axios.delete(`/api/notices/${id}`);
      return { id, type };
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const favorite = createAsyncThunk(
  'notices/favorite',
  async (page = 1, thunkAPI) => {
    const limit = 20;
    try {
      const res = await axios.get(
        `/api/notices/favorite&page=${page}&limit=${limit}`
      );
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const myAds = createAsyncThunk(
  'notices/myAds',
  async (page = 1, thunkAPI) => {
    const limit = 20;
    try {
      const res = await axios.get(
        `/api/notices&page=${page}&limit=${limit}`
      );
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
