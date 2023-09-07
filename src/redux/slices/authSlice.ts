// src/store/authSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  email: string | null;
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  email: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => ({
      ...state,
      email: action.payload,
      isLoggedIn: true,
    }),
  },
});

export const { login } = authSlice.actions;

export default authSlice.reducer;
