import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
  credentials: {
    username: string;
    password: string;
  };
}

const initialState: UserState = {
  credentials: {
    username: "",
    password: "",
  },
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const {} = UserSlice.actions;
export default UserSlice.reducer;
