import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const { REACT_APP_SERVER_HOST: HOST } = process.env;

axios.defaults.baseURL = HOST;

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (userData, thunkAPI) => {
    try {
      const res = await axios.post('/api/auth/signup', userData);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (userData, thunkAPI) => {
    try {
      const res = await axios.post('/api/auth/login', userData);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/api/auth/logout');
    clearAuthHeader();
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const current = createAsyncThunk('auth/current', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const savedAccessToken = state.auth.accessToken;

  if (savedAccessToken === null) {
    return thunkAPI.rejectWithValue('Unable to fetch user');
  }

  try {
    setAuthHeader(savedAccessToken);
    const res = await axios.get('/api/auth/current');
    return res.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const refresh = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const savedRefreshToken = state.auth.refreshToken;

  if (savedRefreshToken === null) {
    return thunkAPI.rejectWithValue('Unable to fetch user');
  }

  try {
    const res = await axios.post('/api/auth/token', {
      refreshToken: savedRefreshToken,
    });
    return res.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
