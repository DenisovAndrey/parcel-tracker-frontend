import { configureStore } from '@reduxjs/toolkit';
import authReducer, { AuthState } from './slices/authSlice';

export interface StateType { auth: AuthState }

const store = configureStore<StateType>({
  reducer: {
    auth: authReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
