import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";






export const fetchUserPets = createAsyncThunk(
    "ownPets/getAll",
    async (_, thunkAPI) => {
        try {
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
            const response = await axios.delete(`/api/userprofile/${petId}`);
            return response.data.data._id;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);
// https://petly-server.onrender.com/
export const addOwnPet = createAsyncThunk(
    "ownPets/addPet",
    async (newPet, thunkAPI) => {
        try {
            const response = await axios.post("/api/userprofile",  newPet );
            return response;
        } catch (e) {
            console.log('error');
            console.log(thunkAPI.rejectWithValue(e.message));
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);