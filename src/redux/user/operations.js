import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//     Own Pets
// ========================================================================
const { REACT_APP_SERVER_HOST: HOST } = process.env;

axios.defaults.baseURL = HOST;
const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  };




export const fetchUserPets = createAsyncThunk(
    "ownPets/getAll",
    async (_, thunkAPI) => {
        setAuthHeader('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTZjN2Y3ZWMxMDA1ZGQxNTM3M2Y5OCIsInR5cGUiOiJhY2Nlc3NUb2tlbiIsImlhdCI6MTY3NjA2ODk5NywiZXhwIjoxNjc2MTU1Mzk3fQ.M1Z1wMhdokFaif4XwyCDyQie9MZQBagyRR85D6TfcGY');
        try {
            const response = await axios.get("/userprofile"); 
            return response.data.data.pets;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const deleteOneOwnPet = createAsyncThunk(
    "ownPets/deleteOneOwnPet",
    async (petId, thunkAPI) => {
        setAuthHeader('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTZjN2Y3ZWMxMDA1ZGQxNTM3M2Y5OCIsInR5cGUiOiJhY2Nlc3NUb2tlbiIsImlhdCI6MTY3NjA2ODk5NywiZXhwIjoxNjc2MTU1Mzk3fQ.M1Z1wMhdokFaif4XwyCDyQie9MZQBagyRR85D6TfcGY');
        
        try {
            const response = await axios.delete(`/userprofile/${petId}`);
            return response.data.data._id;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const addOwnPet = createAsyncThunk(
    "ownPets/addPet",
    async (newPet, thunkAPI) => {
        setAuthHeader('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTZjN2Y3ZWMxMDA1ZGQxNTM3M2Y5OCIsInR5cGUiOiJhY2Nlc3NUb2tlbiIsImlhdCI6MTY3NjA2ODk5NywiZXhwIjoxNjc2MTU1Mzk3fQ.M1Z1wMhdokFaif4XwyCDyQie9MZQBagyRR85D6TfcGY');

        try {
            const response = await axios.post("/userprofile",  newPet );
            return response;
        } catch (e) {
            console.log('error');
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);