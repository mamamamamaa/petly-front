import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getNews = createAsyncThunk('news', async (newsData, thunkAPI) => {
  const { query, pageNews } = newsData;
  try {
    const { data } = await axios.get(
      `/api/news?query=${query}&pageNews=${pageNews}`
    );
    const getDataNews = data.data.result;
    return getDataNews;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
