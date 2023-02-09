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
        setAuthHeader('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTQzY2FiNDhlYTYyNTdhYTZlZDgzZiIsInR5cGUiOiJhY2Nlc3NUb2tlbiIsImlhdCI6MTY3NTkwMzkyMywiZXhwIjoxNjc1OTkwMzIzfQ.5jB8p2CRT-u1JFCI62JRMppfbJoXwj8Fr8WmzDH7GRw');
        try {
            const response = await axios.get("/userprofile");           
            return response.data.pets;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const deleteOneOwnPet = createAsyncThunk(
    "ownPets/deleteOneOwnPet",
    async (petId, thunkAPI) => {
        setAuthHeader('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTQzY2FiNDhlYTYyNTdhYTZlZDgzZiIsInR5cGUiOiJhY2Nlc3NUb2tlbiIsImlhdCI6MTY3NTkwMzkyMywiZXhwIjoxNjc1OTkwMzIzfQ.5jB8p2CRT-u1JFCI62JRMppfbJoXwj8Fr8WmzDH7GRw');
        console.log(petId);
        try {
            const response = await axios.delete(`/userprofile/${petId}`);
            // console.log(response);
            // console.log('response', response);
            // console.log('response.data', response.data);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const addOwnPet = createAsyncThunk(
    "ownPets/addPet",
    async (newPet, thunkAPI) => {
        try {
            const response = await axios.post("/userprofile",  newPet );
        // console.log('response', response);
        // console.log('response.data', response.data);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);