import { configureStore } from '@reduxjs/toolkit';
import { userReducer, searchReducer } from './userSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    search: searchReducer,
  },
});
