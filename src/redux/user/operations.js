
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// const { REACT_APP_SERVER_HOST: HOST } = process.env;

// axios.defaults.baseURL = HOST;
//axios.defaults.baseURL = "https://localhost:3001";
// const setAuthHeader = token => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

//1argument-type action, 2argument - fn- done HTTP and return HTTP with data



export const getUserData = createAsyncThunk(
    'user/getUser',
  async (_, thunkAPI) => {
      try {
       
          const response = await axios.get('/api/userprofile');
        //   setAuthHeader(response.data.accessToken); 
        // setAuthHeader(response.data.auth.accessToken); 
       
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
            //  setAuthHeader(response.data.auth.accessToken);       
           console.log(response.data)
            //const {data} = await.axios.patch(`/userprofile/userProfile)
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
            // setAuthHeader(response.data.auth.accessToken); 
            // setAuthHeader(response.data.accessToken);
            // setAuthHeader(response.data.token);
            console.log('response.data.data.pets', response.data.data.pets);
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
            // setAuthHeader(response.data.token);
            // setAuthHeader(response.data.auth.accessToken); 
            console.log('response.data.data._id', response.data.data._id);
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
            const response = await axios.post("/api/userprofile",  newPet, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            } );
            // setAuthHeader(response.data.token);
            // setAuthHeader(response.data.auth.accessToken); 
            console.log('response', response);
            // axios.defaults.headers.post['Content-Type'] = 'application/json';
            return response;
        } catch (e) {
            console.log('error', e);
            console.log(thunkAPI.rejectWithValue(e));
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);
