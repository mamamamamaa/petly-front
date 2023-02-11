import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const { REACT_APP_SERVER_HOST: HOST } = process.env;

axios.defaults.baseURL = HOST;
//axios.defaults.baseURL = "https://localhost:3001";
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

//1argument-type action, 2argument - fn- done HTTP and return HTTP with data



export const getUserData = createAsyncThunk(
    'user/getUser',
  async (_, thunkAPI) => {
      try {
       
          const response = await axios.get('/api/userprofile');
          setAuthHeader(response.data.token); 
       
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);


export const updateUserData = createAsyncThunk(
    "user/updateUser",    
    async (userData, thunkAPI) => {
        try {
            console.log(userData)
            const response = await axios.put("/api/auth/update", userData);
             setAuthHeader(response.data.auth.accessToken);       
           console.log(response.data)
            //const {data} = await.axios.patch(`/userprofile/userProfile)
            return response.data;
        }
        catch (e) { 
             return thunkAPI.rejectWithValue(e.message);
        }
  
}); // add token 