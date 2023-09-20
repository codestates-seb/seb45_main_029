import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    loggedIn: false,
    email: '',
    name: '',
    userId: 1,
    bookmark: [],
    video: [],
    job: '',
    image: '',
    accessToken: '',
    thumb: '',
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
    refresh: (state, action) => {
      state.userId = action.payload.userId;
      state.email = action.payload.email;
      state.accessToken = action.payload.accessToken;
    },

    loginUser: (state, action) => {
      state.loggedIn = true;
      return state;
    },
    logoutUser: (state, action) => {
      state.loggedIn = false;
    },
    plusBookmark: (state, action) => {
      console.log(action.payload.videoTitle);
      state.bookmark = [
        ...state.bookmark,
        {
          videoId: action.payload.videoId,
          thumb: action.payload.thumb,
          videoTitle: action.payload.videoTitle,
        },
      ];
      return state;
    },
    setBookmark: (state, action) => {
      state.bookmark = action.payload.data;
      return state;
    },
    deleteBookmark: (state, action) => {
      state.bookmark = state.bookmark.filter((el) => {
        return action.payload.videoId !== el.videoId;
      });
      return state;
    },

    setVideo: (state, action) => {
      state.video = action.payload.data;
      return state;
    },

    setRecommendedVideosUrl: (state, action) => {
      state.recommendedVideosUrl = action.payload;
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
  refresh,
  plusBookmark,
  logoutUser,
  setVideo,
} = userSlice.actions;
export default userSlice.reducer;
