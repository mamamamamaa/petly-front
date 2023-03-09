import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
// ======================================================
const { REACT_APP_SERVER_HOST: HOST } = process.env;

axios.defaults.baseURL = HOST;

// don`t touch`=================================

export const getUserData = createAsyncThunk(
  'user/getUser',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/api/userprofile');
      return response.data.data.user;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  'user/updateUser',
  async (user, thunkAPI) => {
    try {
      const res = await axios.put(`/api/auth/update`, user);
      toast.success('User data have updated successfully');
      return res;
    } catch (e) {
      return thunkAPI.rejectWithValue(
        e.message("Sorry, can't update user, server Error!")
      );
    }
  }
);

export const updateAvatar = createAsyncThunk(
  'avatarURL/updateAvatar',
  async (avatarURL, thunkAPI) => {
    try {
      const res = await axios.patch(`/api/auth/avatar`, avatarURL, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      toast.success('Avatar have updated successfully');

      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchUserPets = createAsyncThunk(
  'ownPets/getAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/api/userprofile');
      return response.data.data.pets.reverse();
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteOneOwnPet = createAsyncThunk(
  'ownPets/deleteOneOwnPet',
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
  'ownPets/addPet',
  async (newPet, thunkAPI) => {
    try {
      const response = await axios.post('/api/userprofile', newPet, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
