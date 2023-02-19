import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const { REACT_APP_NEWS_SERVER_HOST } = process.env;
// const { API_KEY } = process.env;

// ======== second way for news ========= down
export const getNews = createAsyncThunk(
  'news',
  async (query = 'pets', thunkAPI) => {
    try {
      const { data } = await axios.get(
        `${REACT_APP_NEWS_SERVER_HOST}/v2/everything?q=${query}&pageSize=6&apiKey=542cd052e17c46769d10d50b01159abd`
      );
      // console.log(query);
      // console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
// ======== second way for news ========= up

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
