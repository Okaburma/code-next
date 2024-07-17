import {
  LoginUserParam,
  RegisterUserParam,
  User,
  UserSlice,
} from "./../../types/user";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// interface User {
//   name: string;
//   email: string;
// }

// interface UserSlice {
//   user: User | null;
//   isLoading: boolean;
//   error: Error | null;
// }

const initialState: UserSlice = {
  user: null,
  isLoading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
