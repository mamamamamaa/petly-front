
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const getUserData = createAsyncThunk(
    'user/getUser',
  async (_, thunkAPI) => {
      try {       
          const response = await axios.get('/api/userprofile');
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
           console.log(response.data)
            return response.data;
        }
        catch (e) { 
             return thunkAPI.rejectWithValue(e.message);
        }
  
}); // add token 







export const fetchUserPets = createAsyncThunk(
    "ownPets/getAll",
    async (_, thunkAPI) => {
        try {
            console.log('fetch for all');
            const response = await axios.get("/api/userprofile");
            return response.data.data.pets;
        } catch (e) {
            console.log("event in operations", e);
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const deleteOneOwnPet = createAsyncThunk(
    "ownPets/deleteOneOwnPet",
    async (petId, thunkAPI) => {
        try {
            console.log('petId', petId);
            const response = await axios.delete(`/api/userprofile/${petId}`);
            return response.data.data._id;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);
export const addOwnPet = createAsyncThunk(
    "ownPets/addPet",
    async (newPet, thunkAPI) => {
        try {
            const response = await axios.post("/api/userprofile",  newPet, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            } );
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);
