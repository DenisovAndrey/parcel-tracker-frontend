import React, { FC, useEffect } from 'react';
import styled from 'styled-components';
import { Navigate, useParams } from 'react-router-dom';
import { OrdersList } from '../components/OrdersList';
import { Head } from '../ui-kit/atoms/Head';
import { RouterPaths } from '../router/routerPaths';

const Container = styled.div`
    margin: auto;
    max-width: 800px;
    border: 1px solid #F6F4FF;
`;
export const CheckpointsView: FC = () => {
  const { trackingNumber } = useParams();

  if (!trackingNumber) {
    return <Navigate to={RouterPaths.ROOT} />;
  }

  return (
    <Container>
      <Head title="Your order details" description="Here you can all the order details and checkpoints" />
    </Container>
  );
};
