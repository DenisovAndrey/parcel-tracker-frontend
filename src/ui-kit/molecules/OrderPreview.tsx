import React, { FC } from 'react';
import styled from 'styled-components';
import { Order } from '../../types/Order';

const Container = styled.div`
  font-family: 'Inter', sans-serif;
  color: #667085;
  border: 1px solid #F6F4FF;
`;
const StyledHeader = styled.div`
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background: #F6F4FF;
`;
const StyledContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;
export const OrderPreview: FC<{ order: Order }> = ({ order }) => (
  <Container>
    <StyledHeader>
      <div>Order Number</div>
      <div>{order.orderNo}</div>
    </StyledHeader>
    <StyledContent>
      <div>Delivery address:</div>
      <div>{order.address.street}, {order.address.zip_code}, {order.address.city}</div>
    </StyledContent>
    <StyledContent>
      <div>Tracking number:</div>
      <div>{order.trackingNumber}</div>
    </StyledContent>
  </Container>
);
