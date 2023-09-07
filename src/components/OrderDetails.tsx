import React, { FC, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { fetchCheckpoints } from '../redux/slices/checkpointsSlice';
import { RootState } from '../redux';
import { RouterPaths } from '../router/routerPaths';
import { OrderDetails as OrderDetailsUiKit } from '../ui-kit/organisms/OrderDetails';

export const OrderDetails: FC<{ trackingNumber: string }> = ({ trackingNumber }) => {
  const dispatch = useDispatch();
  const checkpoints = useSelector((state: RootState) => state.checkpoints.checkpoints);
  const orders = useSelector((state: RootState) => state.orders.orders);

  useEffect(() => {
    dispatch(fetchCheckpoints(trackingNumber));
  }, [dispatch, trackingNumber]);

  const currentOrder = useMemo(
    () => orders.find((order) => order.trackingNumber === trackingNumber),
    [orders, trackingNumber],
  );

  if (!currentOrder) {
    return <Navigate to={RouterPaths.ROOT} />;
  }

  return (
    <OrderDetailsUiKit order={currentOrder} checkpoints={checkpoints} />
  );
};
