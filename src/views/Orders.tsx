import React from 'react';
import styled from 'styled-components';
import { OrdersList } from '../components/OrdersList';
import { Head } from '../ui-kit/atoms/Head';

const Container = styled.div`
    margin: auto;
    max-width: 800px;
    border: 1px solid #F6F4FF;
`;
export const OrdersView = () => (
  <Container>
    <Head title="Your orders" description="Here you can find your recent orders" />
    <OrdersList />
  </Container>
);
