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
  },

  reducers: {
    setUser: (state, action) => {
      state.loggedIn = action.payload.loggedIn;
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.userId = action.payload.userId;
      state.bookmark = action.payload.bookmark;
      state.job = action.payload.job;
      state.image = action.payload.image;
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
      return state;
    },
    setBookmark: (state, action) => {
      state.bookmark = [...state.bookmark, action.payload.videoId];
      return state;
    },
    deleteBookmark: (state, action) => {
      state.bookmark = state.bookmark.filter((el) => {
        return action.payload.videoId !== el;
      });
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, setBookmark, deleteBookmark, updateUser, deleteUser } =
  userSlice.actions;
export default userSlice.reducer;
