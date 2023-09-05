import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
  // eslint-disable-next-line no-dupe-keys
  name: 'search',
  initialState: {
    data: [],
    searchValue: '',
  },
  reducers: {
    getData: (state, action) => {
      return { ...state, data: action.payload };
    },
    setSearchValue: (state, action) => {
      return { ...state, searchValue: action.payload };
    },
    search: (state, action) => {
      const fullData = action.payload;
      const re = new RegExp('.*' + state.searchValue + '.*', 'g');
      return {
        ...state,
        data: fullData.filter((search) => search.동영상.match(re)),
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { getData, setSearchValue, search } = searchSlice.actions;

export default searchSlice.reducer;
