
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
// ======================================================
const { REACT_APP_SERVER_HOST: HOST } = process.env;

axios.defaults.baseURL = HOST;

// don`t touch`=================================



export const getUserData = createAsyncThunk(
    'user/getUser',
  async (_, thunkAPI) => {
      try {       
          const response = await axios.get('/api/userprofile');
       console.log(response.data.data.user)
          return response.data.data.user;     
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);


export const updateUser  = createAsyncThunk(
    "user/updateUser",    
    async (user,  thunkAPI) => {
        console.log(user)
        try {
            const response = await axios.put(`/api/auth/update`, user );           
                 return response;
        }
        catch (e) { 
             return thunkAPI.rejectWithValue(e.message("Sorry, can't update user, server Error!") );
        }
  
});



export const updateAvatar = createAsyncThunk(
    "avatarURL/updateAvatar",    
    async ( avatarURL, formData,  thunkAPI) => {
        
        //console.log()
        try {                           
           
            const res = await axios.patch(`/api/auth/avatar`, avatarURL, {
                headers: {
                    "Content-Type": "multipart/form-data",                       
            },
            })          
            
            console.log('response', res.data)
            return res.data;
        }
        catch (e) { 
             return thunkAPI.rejectWithValue(e.message);
        }
  
}); 





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
