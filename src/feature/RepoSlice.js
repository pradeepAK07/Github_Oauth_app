import { createSlice } from "@reduxjs/toolkit";

const initialRepo = {
  GetRepo: [],
};

const RepoSlice = createSlice({
  name: "RepoInfo",
  initialState: initialRepo,
  reducers: {
    RepoInfo(state, action) {
      state.GetRepo = action.payload;
    },
  },
});

export const { RepoInfo } = RepoSlice.actions;
export default RepoSlice.reducer;
