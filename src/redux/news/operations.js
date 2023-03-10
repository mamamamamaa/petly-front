import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// ======== first way for news =========
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
// ======================================

// const { NEWSSERVER, NEWSKEY } = process.env;

// export const getNews = createAsyncThunk(
//   'news',
//   async (query = 'animals', thunkAPI) => {
//     try {
//       const { data } = await axios.get(`/api/news?query=${query}`);
//       console.log(query);
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// =====================
// const { REACT_APP_SERVER_HOST: HOST } = process.env;
// axios.defaults.baseURL = HOST;
// export const getNews = createAsyncThunk(
//   'news',
//   async (page = 1, query = 'dog', thunkAPI) => {
//     const limit = 6;
//     //   if (query === '') {
//     //     query = 'dog';
//     //   }
//     try {
//       const res = await axios.get(
//         `/api/news&page=${page}&limit=${limit}&query=${query}`
//       );
//       return res.data.result;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// =====================
