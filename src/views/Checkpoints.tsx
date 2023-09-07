import React, { FC, useEffect } from 'react';
import styled from 'styled-components';
import { Navigate, useParams } from 'react-router-dom';
import { OrdersList } from '../components/OrdersList';
import { Head } from '../ui-kit/atoms/Head';
import { RouterPaths } from '../router/routerPaths';
import { Button } from '../ui-kit/atoms/Button';
import Link from '../ui-kit/atoms/Link';
import { OrderDetails } from '../components/OrderDetails';

const Container = styled.div`
    margin: auto;
    max-width: 800px;
    border: 1px solid #F6F4FF;
`;
const BackContainer = styled.div`
  margin: 20px 0;
  font-family: 'Inter', sans-serif;
  font-size: 20px;
  color: #667085;
  padding: 24px;
`;
export const CheckpointsView: FC = () => {
  const { trackingNumber } = useParams();

  if (!trackingNumber) {
    return <Navigate to={RouterPaths.ROOT} />;
  }

  return (
    <Container>
      <Head title="Your order details" description="Here you can all the order details and checkpoints" />
      <BackContainer><Link to={RouterPaths.ROOT}>All orders</Link></BackContainer>
      <OrderDetails trackingNumber={trackingNumber} />
    </Container>
  );
};
