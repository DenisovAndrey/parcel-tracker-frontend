import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import ordersReducer from './slices/ordersSlice';
import checkpointsReducer from './slices/checkpointsSlice';
import type { AuthState } from './slices/authSlice';
import type { OrdersState } from './slices/ordersSlice';
import type { CheckpointsState } from './slices/checkpointsSlice';

export interface StateType {
  auth: AuthState,
  orders: OrdersState,
  checkpoints: CheckpointsState
}

const store = configureStore<StateType>({
  reducer: {
    auth: authReducer,
    orders: ordersReducer,
    checkpoints: checkpointsReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
