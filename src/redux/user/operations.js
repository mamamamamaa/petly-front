import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://petly-back.";

//1argument-type action, 2argument - fn- done HTTP and return HTTP with data

export const updateUserData = createAsyncThunk(
    "user/updateUser",
    
    async (query, thunkAPI) => {
        try {
            const response = await axios.get("/user/userProfile");
            return response.data;
        }
        catch (e) { 
             return thunkAPI.rejectWithValue(e.message);
        }
  
});