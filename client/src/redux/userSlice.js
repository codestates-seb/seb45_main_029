import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    loggedIn: false,
    email: '',
    name: '',
    userId: 1,
    bookmark: [],
    job: '',
    image: '',
    accessToken: '',
  },

  reducers: {
    setUser: (state, action) => {
      state.loggedIn = true;
      state.email = action.payload.email;
      state.userId = action.payload.userId;
      state.accessToken = action.payload.accessToken;
      return state;
    },
    updateUser: (state, action) => {
      state.nickname = action.payload.nickname;
      state.motto = action.payload.motto;
      state.painArea = action.payload.painArea;
      state.image = action.payload.image;
      state.job = action.payload.job;
    },
    deleteUser: (state, action) => {
      state.loggedIn = false;
      state.email = '';
      state.name = '';
      state.userId = 1;
      state.bookmark = [];
      state.job = '';
      state.image = '';
      state.accessToken = '';
      return state;
    },
    loginUser: (state, action) => {
      state.loggedIn = true;
      console.log(state.loggedIn);
      return state;
    },
    setBookmark: (state, action) => {
      state.bookmark = [...state.bookmark, action.payload];
      return state;
    },
    deleteBookmark: (state, action) => {
      state.bookmark = state.bookmark.filter((el) => {
        return action.payload !== el;
      });
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setUser,
  setBookmark,
  deleteBookmark,
  updateUser,
  deleteUser,
  loginUser,
} = userSlice.actions;
export default userSlice.reducer;
