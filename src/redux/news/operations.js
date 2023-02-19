import axios from 'axios';
import toast from 'react-hot-toast';
import { createAsyncThunk } from '@reduxjs/toolkit';

// const { NEWSSERVER, NEWSKEY } = process.env;

// ======== second way for news ========= down
export const getNews = createAsyncThunk(
  'news',
  async (query = 'pets', thunkAPI) => {
    try {
      const { data } = await axios.get(`/api/news?query=${query}`);
      // console.log(query);
      // console.log(data);
      return data.data.result.value;
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
