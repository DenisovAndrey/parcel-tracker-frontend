import { AxiosRequestConfig, AxiosResponse } from 'axios';
import api from './rootService';
import { Order } from '../types/Order';
import { OrdersPaths } from './paths/OrdersPaths';

export const ordersService = {
  async getOrders(email: string): Promise<Order[]> {
    const config: AxiosRequestConfig = {
      params: {
        userEmail: email,
      },
    };

    const res = await api.get<{ orders: Order[]; }>(OrdersPaths.ROOT, config);
    return res.data.orders;
  },
};
