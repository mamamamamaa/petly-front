import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://petly-back.";

//1argument-type action, 2argument - fn- done HTTP and return HTTP with data

export const updateUserData = createAsyncThunk(
    "user/updateUser",
    
    async ({ name,
    email,
    birthday,
    phone,
    city,
    favorites}, thunkAPI) => {
        try {
            // const token = thunkAPI.getState().auth.token
            const response = await axios.post("/userprofile", {name,
    email,
    birthday,
    phone,
    city,
    favorites});
            //const {data} = await.axios.patch(`/userprofile/userProfile)
            return response.data;
        }
        catch (e) { 
             return thunkAPI.rejectWithValue(e.message);
        }
  
}); // add token 