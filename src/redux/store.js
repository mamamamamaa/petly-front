import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/authSlice';
import { serviceReducer } from './services/serviceSlice';
import { newsReducer } from './news/newsSlice';
import { noticeReducer } from './notices/noticeSlice';
import { userReducer } from './user/userSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    services: serviceReducer,
    news: newsReducer,
    notices: noticeReducer,
    user: userReducer,
    auth: persistReducer(authPersistConfig, authReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
