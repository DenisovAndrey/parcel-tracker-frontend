import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { ErrorNotification } from '../ui-kit/atoms/ErrorNotification';
import { OrderPreview } from '../ui-kit/molecules/OrderPreview';
import Link from '../ui-kit/atoms/Link';
import { RootState } from '../redux';
import { fetchOrdersIfNeeded } from '../redux/slices/ordersSlice';
import type {} from 'redux-thunk/extend-redux';

const Container = styled.div`
  padding: 20px;
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

export const OrdersList: FC = () => {
  const dispatch = useDispatch();
  const { orders, error } = useSelector((state: RootState) => state.orders);

  useEffect(() => {
    dispatch(fetchOrdersIfNeeded());
  }, [dispatch]);

  return (
    <div>
      <Container>
        {orders?.length > 0 && orders.map((order) => (
          <Link aria-label={`Order ${order.orderNo}`} key={order.orderNo} to="/">
            <OrderPreview order={order} />
          </Link>
        ))}
      </Container>

      { error && <ErrorNotification role="alert">Houston, we&apos;ve had a problem. Somebody forgot to run our backend service</ErrorNotification> }
    </div>
  );
};
