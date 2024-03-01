import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  token: null,
  data: {},
};
const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    change_token: (state, action) => {
      state.token = action.payload;
    },
    change_user_data: (state, action) => {
      state.data = action.payload;
    },
  },
});
export default UserSlice.reducer;
export const { change_token, change_user_data } = UserSlice.actions;
