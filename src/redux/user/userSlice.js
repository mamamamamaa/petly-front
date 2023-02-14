
import { createSlice
  // , isAnyOf
} from '@reduxjs/toolkit';
import { updateUserData, getUserData } from './operations';
import {fetchUserPets, addOwnPet, deleteOneOwnPet} from './operations';

// const extraActions = [updateUserData, getUserData, fetchUserPets, addOwnPet, deleteOneOwnPet];

const initialState = {
  user: {
    email: null,
    name: null,
    _id: null,
    city: null,
    phone: null,
    birthday: ' ',
    avatarUrl: null,
  },
  isLoading: false,
  error: null,
  pets: [
    {
      _id: {
        $oid: '63debbb83b36515f91881418',
      },
      name: 'Margo',
      pictureURL:
        'https://res.cloudinary.com/dplqola8n/image/upload/v1675541431/apbudcsigastxj9vs7pj.png',
      owner: {
        $oid: '63deb91adfb9c6d283459432',
      },
    },
    {
      _id: {
        $oid: '63debc003b36515f9188141b',
      },
      name: 'Mimi',
      pictureURL:
        'https://res.cloudinary.com/dplqola8n/image/upload/v1675541503/muc8pvjxqkkgwao7kduv.png',
      owner: {
        $oid: '63deb91adfb9c6d283459432',
      },
    },
    {
      _id: {
        $oid: '63ded1606f4d57643715d325',
      },
      name: 'Kesha',
      pictureURL:
        'https://res.cloudinary.com/dplqola8n/image/upload/v1675546975/bo8orwvx54envofncdgz.png',
      owner: {
        $oid: '63deb91adfb9c6d283459432',
      },
    },
    {
      _id: {
        $oid: '63df9fc4befb26880575744f',
      },
      name: 'Jack',
      dateOfBirth: '22.04.2018',
      breed: 'Basenji',
      comments:
        'The Basenji is a breed of hunting dog. It was bred from stock that originated in central Africa.',
      pictureURL:
        'https://res.cloudinary.com/dplqola8n/image/upload/v1675599812/yuyook7jehi4p7wbxwri.jpg',
      owner: {
        $oid: '63df9bb5befb268805757446',
      },
    },
    {
      _id: {
        $oid: '63dfa05bbefb268805757453',
      },
      name: 'Jack',
      dateOfBirth: '24.01.2018',
      breed: 'Persian cat',
      comments:
        'The Persian cat is a long-haired breed of cat characterized by a round face and short muzzle.',
      pictureURL:
        'https://res.cloudinary.com/dplqola8n/image/upload/v1675599962/zxfzrtubjn7iwticgnlm.jpg',
      owner: {
        $oid: '63df9bb5befb268805757446',
      },
    },
    {
      _id: {
        $oid: '63e046967a9b00ea0f9fe1ea',
      },
      name: 'Frank',
      dateOfBirth: '01.01.2023',
      breed: 'Haski',
      comments: 'Hi loves me',
      pictureURL:
        'https://res.cloudinary.com/dmwntn6pl/image/upload/v1675642581/cfsnjzt0pdky15nhjcpv.png',
      owner: {
        $oid: '63e02449b81da6c15ede0cd6',
      },
    },
    {
      _id: {
        $oid: '63e55d2b270b30dc6189b1a2',
      },
      name: 'Cat',
      dateOfBirth: '01.01.2011',
      breed: 'cat',
      comments: 'fake cat',
      pictureURL:
        'https://res.cloudinary.com/dmwntn6pl/image/upload/v1675975978/m8zblhjyne9yb3jrzwxw.jpg',
      owner: {
        $oid: '63e43cab48ea6257aa6ed83f',
      },
    },
    {
      _id: {
        $oid: '63e55d61270b30dc6189b1a6',
      },
      name: 'Dog',
      dateOfBirth: '01.01.2021',
      breed: 'dog',
      comments: 'fake dog',
      pictureURL:
        'https://res.cloudinary.com/dmwntn6pl/image/upload/v1675976032/skh9q7j6wqcaa9u9lctz.jpg',
      owner: {
        $oid: '63e43cab48ea6257aa6ed83f',
      },
    },
    {
      _id: {
        $oid: '63e55d6d270b30dc6189b1a9',
      },
      name: 'Dog2',
      dateOfBirth: '01.01.2021',
      breed: 'dog',
      comments: 'fake dog',
      pictureURL:
        'https://res.cloudinary.com/dmwntn6pl/image/upload/v1675976045/m75lr0zk97dmd0vkebug.jpg',
      owner: {
        $oid: '63e43cab48ea6257aa6ed83f',
      },
    },
    {
      _id: {
        $oid: '63e6da227abd9bb08eeb4b3e',
      },
      name: 'gug',
      dateOfBirth: '01.01.2021',
      breed: 'fog',
      comments: 'fake dog',
      pictureURL:
        'https://res.cloudinary.com/dmwntn6pl/image/upload/v1676073506/v9lpd3obgcp4qsmlbtdz.jpg',
      owner: {
        $oid: '63e6c7f7ec1005dd15373f98',
      },
    },
    {
      _id: {
        $oid: '63e6db058609cd6aa6d6b1f3',
      },
      name: 'gug124',
      dateOfBirth: '01.01.2021',
      breed: 'fog',
      comments: 'fake dog',
      pictureURL:
        'https://res.cloudinary.com/dmwntn6pl/image/upload/v1676073733/eabedsieat55vp0bfp6z.jpg',
      owner: {
        $oid: '63e6c7f7ec1005dd15373f98',
      },
    },
    {
      _id: {
        $oid: '63e7f48baf03bf5cf9a21c61',
      },
      name: 'Bob',
      dateOfBirth: '01.02.2022',
      breed: 'cat',
      comments: 'rrrrrrrr',
      pictureURL:
        'https://res.cloudinary.com/dmwntn6pl/image/upload/v1676145802/tmbmz3mnd0va4jdph4yz.jpg',
      owner: {
        $oid: '63e7bc97c8e047ea8553f9b4',
      },
    },
    {
      _id: {
        $oid: '63e80d8aaf03bf5cf9a21cd7',
      },
      name: 'Cat',
      dateOfBirth: '01.01.2021',
      breed: 'cat',
      comments: 'fake cat',
      pictureURL:
        'https://res.cloudinary.com/dmwntn6pl/image/upload/v1676152202/shw97spkwg1s4kvhk7yd.jpg',
      owner: {
        $oid: '63e8033caf03bf5cf9a21ca0',
      },
    },
    {
      _id: {
        $oid: '63e80d92af03bf5cf9a21cda',
      },
      name: 'Cat2',
      dateOfBirth: '01.01.2021',
      breed: 'cat',
      comments: 'fake cat',
      pictureURL:
        'https://res.cloudinary.com/dmwntn6pl/image/upload/v1676152210/ds0grvuyk0o6udfjvmzf.jpg',
      owner: {
        $oid: '63e8033caf03bf5cf9a21ca0',
      },
    },
    {
      _id: {
        $oid: '63e80d97af03bf5cf9a21cdd',
      },
      name: 'Cat3',
      dateOfBirth: '01.01.2021',
      breed: 'cat',
      comments: 'fake cat',
      pictureURL:
        'https://res.cloudinary.com/dmwntn6pl/image/upload/v1676152214/ercpwakktqzkn048gzmy.jpg',
      owner: {
        $oid: '63e8033caf03bf5cf9a21ca0',
      },
    },
    {
      _id: {
        $oid: '63e80d9caf03bf5cf9a21ce0',
      },
      name: 'Cat4',
      dateOfBirth: '01.01.2021',
      breed: 'cat',
      comments: 'fake cat',
      pictureURL:
        'https://res.cloudinary.com/dmwntn6pl/image/upload/v1676152219/rpcap9ntstftyrj38awa.jpg',
      owner: {
        $oid: '63e8033caf03bf5cf9a21ca0',
      },
    },
    {
      _id: {
        $oid: '63e94eed197d5e080d4a1bb4',
      },
      name: 'Rosi',
      dateOfBirth: '30.01.2023',
      breed: 'himalayan',
      comments: 'ikjkiojoij',
      pictureURL:
        'https://res.cloudinary.com/dmwntn6pl/image/upload/v1676234479/imbjjwnvyiwzrhaw7t23.jpg',
      owner: {
        $oid: '63e8033caf03bf5cf9a21ca0',
      },
    },
    {
      _id: {
        $oid: '63ea0b14de64bfa9cf0951e4',
      },
      name: 'Cat5',
      dateOfBirth: '01.01.2021',
      breed: 'cat',
      comments: 'fake cat',
      pictureURL:
        'https://res.cloudinary.com/dmwntn6pl/image/upload/v1676282643/fppo6hcmb9ujggq4twot.jpg',
      owner: {
        $oid: '63e8033caf03bf5cf9a21ca0',
      },
    },
    {
      _id: {
        $oid: '63ea6a22357e3aaae81cb8bf',
      },
      name: 'Rosie',
      dateOfBirth: '29.01.2023',
      breed: 'persian',
      comments: 'pjkjlhfgx',
      pictureURL:
        'https://res.cloudinary.com/dmwntn6pl/image/upload/v1676306976/azogl2kwenow7zuhghvs.jpg',
      owner: {
        $oid: '63ea246b2745f8c48bcb69a0',
      },
    },
    {
      _id: {
        $oid: '63ea77556a478daaf3a9d99b',
      },
      name: 'tom',
      dateOfBirth: '30.01.2023',
      breed: 'bombay',
      comments: 'pjkjlhfgx',
      pictureURL:
        'https://res.cloudinary.com/dmwntn6pl/image/upload/v1676310356/qtton1mziyw0yv0ckgai.jpg',
      owner: {
        $oid: '63ea246b2745f8c48bcb69a0',
      },
    },
  ],
};

const userSlice = createSlice({
  name: 'user',
  initialState,  
  extraReducers:builder=>
    builder
      .addCase(getUserData.pending, (state, action) => {
        state.error = null;
      })
      .addCase(getUserData.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.user.phone = action.payload.phone;
        state.user.city = action.payload.city;
        state.user.avatar = action.payload.avatar;
        state.user.birthday = action.payload.birthday;
        state.isLoggedIn = true;
        
      })
      .addCase(getUserData.rejected, (state, action) => {
        //state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(updateUserData.pending, (state, action) => {
        state.error = null;
      })
      .addCase(updateUserData.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.data = { ...state.data, ...action.payload };
      })
      .addCase(updateUserData.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message
      })
      .addCase(fetchUserPets.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(fetchUserPets.fulfilled, (state, action) => {
        state.pets = action.payload;
        state.isLoading = false;        
      })
      .addCase(fetchUserPets.rejected, (state, action) => {
        state.isLoading = false; 
        state.error = action.payload;        
      })
      .addCase(deleteOneOwnPet.pending, (state) => {   
        state.error = null;
        state.isLoading = true;
      })
      .addCase(deleteOneOwnPet.fulfilled, (state, action) => {
        state.pets = state.pets.filter(pet => pet._id !== action.payload);
        state.isLoading = false;
      })
      .addCase(deleteOneOwnPet.rejected, (state, action) => {
        state.isLoading = false; 
        state.error = action.payload;        
      })
      .addCase(addOwnPet.pending, (state) => {        
        state.error = null;
        state.isLoading = true;
      })
      .addCase(addOwnPet.fulfilled, (state, action) => {
        state.pets = [action.payload, ...state.pets];
      })
      .addCase(addOwnPet.rejected, (state, action) => {
        state.isLoading = false; 
        state.error = action.payload;        
      })
      // .addMatcher(
      //   isAnyOf(...extraActions.map(action => action.pending)),
      //   state => {
      //     state.error = null;
      //   }
      // )
      // .addMatcher(
      //   isAnyOf(...extraActions.map(action => action.rejected)),
      //   (state, action) => {
      //     state.error = action.payload;
      //   }
      // )
      // .addMatcher(
      //   isAnyOf(...extraActions.map(action => action.fulfilled)),
      //   state => {
      //     state.error = null;
      //   }
      // ),
});

export const userReducer = userSlice.reducer;