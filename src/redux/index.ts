import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import ordersReducer from './slices/ordersSlice';
import type { AuthState } from './slices/authSlice';
import type { OrdersState } from './slices/ordersSlice';

export interface StateType { auth: AuthState, orders: OrdersState }

const store = configureStore<StateType>({
  reducer: {
    auth: authReducer,
    orders: ordersReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
