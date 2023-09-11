import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    loggedIn: false,
    email: '',
    name: '',
    memberId: 1,
    bookmark: [],
  },
  reducers: {
    setUser: (state, action) => {
      state.loggedIn = action.payload.loggedIn;
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.memberId = action.payload.memberId;
      state.bookmark = action.payload.bookmark;
      return state;
    },
    updateUser: (state, action) => {
      state.name = action.payload.name;
      state.memberId = action.payload.memberId;
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
export const { setUser, setBookmark, deleteBookmark } = userSlice.actions;
export default userSlice.reducer;
