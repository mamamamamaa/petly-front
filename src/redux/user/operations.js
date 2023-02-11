import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://petly-back.onrender.com";
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

//1argument-type action, 2argument - fn- done HTTP and return HTTP with data



// export const getUserData = createAsyncThunk(
//     'user/getUser',
//   async (_, thunkAPI) => {
//       try {
       
//           const response = await axios.get('/api/userprofile');
//           setAuthHeader(response.data.token); 
       
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );


export const updateUserData = createAsyncThunk(
    "user/updateUser",    
    async (userData, thunkAPI) => {
        try {
            
            const response = await axios.put("/api/auth/update", userData);
             setAuthHeader(response.data.auth.accessToken);       
           
            //const {data} = await.axios.patch(`/userprofile/userProfile)
            return response.data;
        }
        catch (e) { 
             return thunkAPI.rejectWithValue(e.message);
        }
  
}); // add token 