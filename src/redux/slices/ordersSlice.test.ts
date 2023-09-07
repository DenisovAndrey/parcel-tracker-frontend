import {
  fetchOrders, ordersSlice, OrdersState,
} from './ordersSlice';
import { Article } from '../../types/Article';
import { Address } from '../../types/Address';

const initialState: OrdersState = {
  orders: [],
  isLoading: false,
  error: null,
};

describe('ordersSlice', () => {
  it('should handle fetchOrders.fulfilled', () => {
    const prevState = { ...initialState, isLoading: true };

    const mockOrder = {
      orderNo: '12345',
      trackingNumber: 'TRACK123',
      destinationCountryIso3: 'USA',
      email: 'example@email.com',
      article: {} as Article,
      address: {} as Address,
    };

    const nextState = ordersSlice.reducer(prevState, fetchOrders.fulfilled([mockOrder], '', 'test@example.test'));

    expect(nextState.isLoading).toBe(false);
    expect(nextState.orders).toHaveLength(1);
    expect(nextState.orders[0]).toEqual(mockOrder);
  });

  it('should handle fetchOrders.rejected', () => {
    const prevState = { ...initialState, isLoading: true };
    const errorMessage = 'An error occurred';
    const nextState = ordersSlice.reducer(prevState, fetchOrders.rejected(new Error(errorMessage), '', 'test@example.test'));

    expect(nextState.isLoading).toBe(false);
    expect(nextState.error).toBe(errorMessage);
  });
});
