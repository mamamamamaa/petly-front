import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//     Own Pets
// ========================================================================
// const { REACT_APP_SERVER_HOST: HOST } = process.env;

// axios.defaults.baseURL = HOST;
// const setAuthHeader = token => {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   };




export const fetchUserPets = createAsyncThunk(
    "ownPets/getAll",
    async (_, thunkAPI) => {
        // setAuthHeader('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTZjN2Y3ZWMxMDA1ZGQxNTM3M2Y5OCIsInR5cGUiOiJhY2Nlc3NUb2tlbiIsImlhdCI6MTY3NjA2ODk5NywiZXhwIjoxNjc2MTU1Mzk3fQ.M1Z1wMhdokFaif4XwyCDyQie9MZQBagyRR85D6TfcGY');
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
        // setAuthHeader('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTZjN2Y3ZWMxMDA1ZGQxNTM3M2Y5OCIsInR5cGUiOiJhY2Nlc3NUb2tlbiIsImlhdCI6MTY3NjA2ODk5NywiZXhwIjoxNjc2MTU1Mzk3fQ.M1Z1wMhdokFaif4XwyCDyQie9MZQBagyRR85D6TfcGY');
        
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
        // setAuthHeader('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTZjN2Y3ZWMxMDA1ZGQxNTM3M2Y5OCIsInR5cGUiOiJhY2Nlc3NUb2tlbiIsImlhdCI6MTY3NjA2ODk5NywiZXhwIjoxNjc2MTU1Mzk3fQ.M1Z1wMhdokFaif4XwyCDyQie9MZQBagyRR85D6TfcGY');

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