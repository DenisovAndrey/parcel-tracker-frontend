import {
  createSlice, createAsyncThunk, PayloadAction, Dispatch, ThunkAction, ThunkDispatch,
} from '@reduxjs/toolkit';
import { Order } from '../../types/Order';
import { ordersService } from '../../services/ordersService';
import type { RootState } from '../index';

export interface OrdersState {
  orders: Order[];
  isLoading: boolean;
  error: string | null;
}

const initialState: OrdersState = {
  orders: [],
  isLoading: false,
  error: null,
};

export const fetchOrders = createAsyncThunk('orders/fetchOrders', async (email: string) => ordersService.getOrders(email));

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => ({
        ...state,
        isLoading: true,
        error: null,
      }))
      .addCase(fetchOrders.fulfilled, (state, action: PayloadAction<Order[]>) => ({
        ...state,
        isLoading: false,
        orders: action.payload,
      }))
      .addCase(fetchOrders.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.error.message || 'Failed to fetch orders',
      }));
  },
});

export default ordersSlice.reducer;

export const selectOrders = (state: RootState) => state.orders.orders;

export const selectOrdersFetched = (state: RootState) => state.orders.orders.length > 0;

export const fetchOrdersIfNeeded = (): ThunkAction<void, RootState, null, any> => async (
  dispatch: ThunkDispatch<RootState, null, any>,
  getState: () => RootState,
) => {
  const state = getState();
  const ordersFetched = selectOrdersFetched(state);

  if (!ordersFetched) {
    try {
      await dispatch(fetchOrders(state.auth.email!));
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  }
};
